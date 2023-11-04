import { Like } from "../../model/product_pop/Likes.js";
import { Product } from "../../model/shop_control/Product.js";
import { Users } from "../../model/users/Users.js";


export const addLike = async (req, res) => {
    try {
        const { userId, productId } = req.body

        const user = await Users.findByPk(userId)
        const product = await Product.findByPk(productId)

        if (!user || !product) {
            return res.status(404).json({ message: 'User or product not found' });
        }

        const existingLike = await Like.findOne({
            where: {
                user_id: userId,
                product_id: productId
            }
        })

        if (existingLike) {
            const like = await Like.destroy({
                where: {
                    user_id: userId,
                    product_id: productId
                }
            })
            return res.status(404).json(like);
        }

        const like = await Like.create({
            user_id: userId,
            product_id: productId
        })
        return res.status(201).json(like)

    } catch (error) {
        return res.status(500).json({ error: error })
    }
}
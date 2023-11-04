import { Review } from "../../model/product_pop/Review.js";
import { Product } from "../../model/shop_control/Product.js";
import { Users } from "../../model/users/Users.js";


export const listReview = async (req, res) => {
    try {
        const review = await Review.findAll({
            include: [
                {
                    model: Product,
                    attibutes: ['name']
                }
            ]
        })
        res.json(review)
    } catch (error) {
        return res.status(500).json({ error: error })
    }
};

export const addReview = async (req, res) => {
    const { userId, productId, ranking } = req.body
    try {
        const user = await Users.findByPk(userId)
        const product = await Product.findByPk(productId)

        if (!user || !product) {
            return res.status(404).json({ message: 'User or product not found' });
        }

        const review = await Review.create({
            ranking: ranking,
            product_id: productId,
            user_id: userId
        })
        res.status(201).json(review)
    } catch (error) {
        return res.status(500).json({ error: error })
    }
};

export const updateReview = async (req, res) => {
    const { id } = req.params
    const { ranking } = req.body
    try {
        const review = await Review.findByPk(id)
        review.ranking = ranking
        await review.save()
        res.json(review)
    } catch (error) {
        return res.status(500).json({ error: error })
    }
};

export const deleteReview = async (req, res) => {
    const { id } = req.params
    try {
        await Review.destroy({ where: { id: id } })
        return res.status(204)
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

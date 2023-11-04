import { Product } from "../../model/shop_control/Product.js";

export const listProducts = async (req, res) => {
    try {
        const products = await Product.findAll()
        res.json(products)
    } catch (error) {
        return res.status(500).json({ error })
    }

};

export const addProduct = async (req, res) => {
    const { pic, path, originalname, mimetype, size } = req.file
    const { name, description, product_type, price, menu_id } = req.body
    try {
        const product = await Product.create({ name, pic: originalname, description, product_type, price, menu_id })
        res.json(product)
    } catch (error) {
        return res.status(500).json({ error: error })
    }

};

export const getProductByName = async (req, res) => {
    const { name } = req.params;
    try {
        const product = await Product.findOne({ where: { name: name } })
        product === null ? res.json({ message: "Not found" }) : res.json(product)
    } catch (error) {
        return res.status(500).json({ error: error })
    }
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, pic, description, product_type, price, discount, quantity } = req.body;
    try {
        const product = await Product.findByPk(id)
        product.name = name;
        product.pic = pic;
        product.description = description;
        product.product_type = product_type
        product.price = price;
        product.discount = discount;
        product.quantity = quantity
        await product.save()
        res.json(product)
    } catch (error) {
        return res.status(500).json({ error: error })
    }
};

export const deleteProduct = async (req, res) => {
    const { name } = req.params;
    try {
        await Product.destroy({ where: { name: name } })
        return res.status(204)
    } catch (error) {
        return res.status(500).json({ error: error })
    }
};
import { ProductOrder } from "../../model/ProductOrder.js";
import { Order } from "../../model/Order.js";
import { Product } from "../../model/shop_control/Product.js";
import { Customer } from "../../model/users/Customer.js";

export const orderController = {}

orderController.addOrder = async (req, res) => {
    const { order_status, customerId } = req.body
    try {
        const customer = await Customer.findByPk(customerId)

        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        const order = await Order.create({
            order_status,
            orders: customerId
        })
        res.status(201).json(order)
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

orderController.addProductOrder = async (req, res) => {
    const { productId, orderId, quantity, pay_method } = req.body
    try {
        const product = await Product.findByPk(productId)
        const order = await Order.findByPk(orderId)

        if (!product || !order) {
            return res.status(404).json({ message: 'Product or Order not found' });
        }

        const productorder = await ProductOrder.create({
            quantity,
            pay_method,
            productId,
            orderId
        })
        res.status(201).json(productorder)
    } catch (error) {
        return res.status(500).json({ error });
    }
}






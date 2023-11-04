import { orderController } from "../../controller/orders/Orders.js";

import { Router } from 'express'

const router = new Router()

//router.get('/orders', listOrders)
router.post('/add-new-order', orderController.addOrder)
router.post('/add-new-product-order', orderController.addProductOrder)
//router.delete('/delete-order', deleteOrder)

export default router
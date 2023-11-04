import { Router } from "express";
import cors from 'cors'

import { listProducts, addProduct, getProductByName, updateProduct, deleteProduct } from '../controller/shop_control/Product.js';
import { upload } from '../helpers/image_handle.js';
import { addLike } from "../controller/product_pop/Likes.js";
import { addReview, deleteReview, listReview, updateReview } from "../controller/product_pop/Review.js";


const router = new Router();

router.get('/product', cors(), listProducts)
router.post('/add-new-product', cors(), upload.single('pic'), addProduct)
router.get('/products/:name', cors(), getProductByName)
router.put('/update-product/:id', cors(), updateProduct)
router.delete('/delete-product-name/:name', cors(), deleteProduct)

router.post('/add-like-product', cors(), addLike)

router.get('/view-reviews', cors(), listReview)
router.post('/add-review', cors(), addReview)
router.put('/update-review/:id', cors(), updateReview)
router.delete('/delete-review/:id', cors(), deleteReview)


export default router
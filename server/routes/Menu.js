import { Router } from "express";
import { listMenu, addMenu, updateMenu, removeMenu } from "../controller/shop_control/Menu.js";

const router = new Router()

router.get('/menu', listMenu)
router.post('/add-menu', addMenu)
router.put('/update-menu/:id', updateMenu)
router.delete('/delete-menu/:id', removeMenu)

export default router
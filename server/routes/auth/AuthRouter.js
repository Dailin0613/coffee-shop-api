import { Router } from "express";
import { Logout, Signin, Signup } from '../../controller/users/User.js'
//import { authenticateToken } from "../../middlewers/auth.js";


const router = new Router()

router.post('/signin', Signin)
router.post('/signup', Signup)
router.delete('/logout', Logout)

router.all('*', (req, res) => res.status(400).json({ message: 'Bad Request.' }))

export default router

import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

import { Users } from "../../model/users/Users.js";
import { jwtTokens } from "../../middlewers/jwt.js";

export const Signin = async (req, res) => {
    const { username, password } = req.body;
    try {
        const existingUser = await Users.findOne({ where: { username: username } });
        if (!existingUser)
            return res.status(404).json({ message: "Username does not exist" });
        const isPassCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPassCorrect)
            return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ username: existingUser.username, id: existingUser.id }, "13KNksMYjhPJktJK06", { expiresIn: "1h" })
        res.status(200).json({ result: existingUser, token: token })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const Signup = async (req, res) => {
    const {
        name,
        lastname,
        username,
        email,
        password,
        isStaff,
        isAdmin,
        isPremium,
    } = req.body;
    try {
        const existingUser = await Users.findOne({ where: { username: username } });
        if (existingUser)
            return res.status(400).json({ message: "The user already exist" });

        const hashPassword = await bcrypt.hash(password, 2);

        const user = await Users.create({
            name,
            lastname,
            username,
            email,
            password: hashPassword,
            isStaff,
            isAdmin,
            isPremium,
        });
        const token = jwt.sign({ username: user.username, id: user.id }, "13KNksMYjhPJktJK06", { expiresIn: 86400 })
        res.status(200).json({ result: user, token })
        //res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const Logout = async (req, res) => { };

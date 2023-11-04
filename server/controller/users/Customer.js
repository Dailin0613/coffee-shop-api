import { Customer } from "../../model/users/Customer.js";
import { Users } from "../../model/users/Users.js"

export const Customers = async (req, res) => {
    try {
        const customers = await Customer.findAll({
            include: [
                {
                    model: Users,
                    attributes: ['username']
                }
            ]
        })
        res.json(customers)
    } catch (error) {
        return res.status(500).json({ error })
    }
}

export const addCustomer = async (req, res) => {
    const { user } = req.body
    try {
        const customer = await Customer.create({ user_id: user })
        res.status(201).json(customer)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export const deleteCustomer = async (req, res) => {
    const { id } = req.params
    try {
        await Customer.destroy({ where: { id: id } })
        return res.status(204)
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
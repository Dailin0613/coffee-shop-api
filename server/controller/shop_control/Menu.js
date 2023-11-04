import { Menu } from "../../model/shop_control/Menu.js";
import { Product } from "../../model/shop_control/Product.js";

export const listMenu = async (req, res) => {
    try {
        const menu = await Menu.findAll({
            include: Product
        });
        res.json(menu);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const addMenu = async (req, res) => {
    const { section } = req.body
    try {
        const menu = await Menu.create({ section })
        res.json(menu);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const updateMenu = async (req, res) => {
    const { id } = req.params
    const { section } = req.body
    try {
        const menu = await Menu.findByPk(id)
        menu.section = section
        await menu.save()
        res.json(menu)
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const removeMenu = async (req, res) => {
    const { id } = req.params
    try {
        await Menu.destroy({ where: { id: id } })
        return res.status(204)
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

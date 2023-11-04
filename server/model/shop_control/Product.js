import { sequelize } from "../../database/db.js";
import { DataTypes, Model } from "sequelize";
import { Order } from "../Order.js"
import { ProductOrder } from "../ProductOrder.js";
import { Menu } from "./Menu.js";
import { Review } from "../product_pop/Review.js";
import { Like } from "../product_pop/Likes.js";


export const Product = sequelize.define('product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        unique: true
    },
    pic: {
        type: DataTypes.STRING,
        unique: true
    },
    description: {
        type: DataTypes.STRING
    },
    product_type: {
        type: DataTypes.STRING,

    },
    price: {
        type: DataTypes.DECIMAL(10, 2)
    },
})

Product.belongsToMany(Order, { through: ProductOrder })
Order.belongsToMany(Product, { through: ProductOrder })

Menu.hasMany(Product, { foreignKey: 'menu_id', sourceKey: 'id' })
Product.belongsTo(Menu, { foreignKey: 'menu_id', targetId: 'id' })

Product.hasMany(Review, { foreignKey: 'product_id', sourceKey: 'id' })
Review.belongsTo(Product, { foreignKey: 'product_id', targetId: 'id' })

Product.hasOne(Like, { foreignKey: 'product_id', sourceKey: 'id' })
Like.belongsTo(Product, { foreignKey: 'product_id', sourceKey: 'id' });
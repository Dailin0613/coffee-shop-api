import { sequelize } from "../database/db.js";

import { DataTypes, Model } from "sequelize";


export const ProductOrder = sequelize.define('productorder', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        default: 1
    },
    pay_method: {
        type: DataTypes.ENUM,
        values: ['cash', 'paypal', 'stripe']
    }
});






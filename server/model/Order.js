import { sequelize } from "../database/db.js";

import { DataTypes, Model } from "sequelize";

export const Order = sequelize.define('order', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    order_status: {
        type: DataTypes.BOOLEAN
    }

});


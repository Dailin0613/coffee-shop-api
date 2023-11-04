import { sequelize } from "../../database/db.js";
import { DataTypes, Model } from "sequelize";

export const Like = sequelize.define('like', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    datetime: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
})
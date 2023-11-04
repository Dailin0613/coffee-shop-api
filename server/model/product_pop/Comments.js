import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database/db.js";

export const Comment = sequelize.define('comment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    content: {
        type: DataTypes.STRING
    }
})

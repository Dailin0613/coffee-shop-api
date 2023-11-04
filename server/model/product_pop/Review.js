import { sequelize } from "../../database/db.js";
import { DataTypes, Model } from "sequelize";

export const Review = sequelize.define('review', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    ranking: {
        type: DataTypes.ENUM,
        values: ['not bad, not good', 'good', 'excellent']
    }
})


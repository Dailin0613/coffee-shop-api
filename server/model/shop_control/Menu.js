import { sequelize } from "../../database/db.js";
import { DataTypes, Model } from "sequelize";


export const Menu = sequelize.define('menu', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    section: {
        type: DataTypes.ENUM,
        values: ['morning', 'evening', 'night']
    },
})


import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database/db.js";

export const CustomizeOrder = sequelize.define('customizeorder', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    coffee_intensity: {
        type: DataTypes.ENUM,
        values: ['Light-bodied coffee with delicate aromas', 'Balanced coffee with a round body and rich flavors', 'Coffee with consistent body and rich aroms']
    },
    coffee_temperature: {
        type: DataTypes.ENUM,
        values: ['too hot', 'hot', 'cold', 'medium']
    },
    cant_sugar: {
        type: DataTypes.INTEGER
    },
    can_tcream: {
        type: DataTypes.INTEGER
    },
    aditional_flavor: {
        type: DataTypes.STRING
    }
})
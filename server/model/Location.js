import { sequelize } from "../database/db.js";
import { DataTypes, Model } from "sequelize";
import { Customer } from "./users/Customer.js";


export const Zone = sequelize.define("zone", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    type: {
        type: DataTypes.ENUM,
        values: ["home", "office", "other"]
    },
    adress: {
        type: DataTypes.STRING
    },
    borough: {
        type: DataTypes.STRING
    },
    district: {
        type: DataTypes.STRING
    },
    zip: {
        type: DataTypes.STRING
    }
});







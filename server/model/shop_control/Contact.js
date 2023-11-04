//Model to create the way of contact, this model will be created by the admin user and gave the info to the customer, 
//like: adress, telephone number, gmail
import { sequelize } from "../../database/db.js";
import { DataTypes, Model } from "sequelize";

export const Contact = sequelize.define('contact', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    telephone_number: {
        type: DataTypes.INTEGER,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    whatsapp: {
        type: DataTypes.STRING,
        validate: {
            isUrl: true
        }
    },
    facebook: {
        type: DataTypes.STRING,
        validate: {
            isUrl: true
        }
    },
    instagram: {
        type: DataTypes.STRING,
        validate: {
            isUrl: true
        }
    }
})
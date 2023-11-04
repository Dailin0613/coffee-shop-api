import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database/db.js";
import { Order } from "../Order.js";
import { Zone } from "../Location.js";


export const Customer = sequelize.define("customer", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
});


Customer.hasOne(Order, { foreignKey: "orders", sourceKey: "id" });
Order.belongsTo(Customer, { foreignKey: "orders", targetId: "id" });






import Sequelize from "sequelize";

export const sequelize = new Sequelize("coffee-shop-db", "postgres", "root", {
    host: "localhost",
    dialect: "postgres",
});



import { sequelize } from "../../database/db.js";

import { DataTypes, Model } from "sequelize";
import { Customer } from "./Customer.js";
import { Comment } from "../product_pop/Comments.js";
import { Like } from "../product_pop/Likes.js";
import { Review } from "../product_pop/Review.js";

export const Users = sequelize.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    lastname: { type: DataTypes.STRING },
    username: { type: DataTypes.STRING, unique: true },
    email: { type: DataTypes.STRING, unique: true, validate: { isEmail: true } },
    password: { type: DataTypes.STRING },
});

Users.hasOne(Customer, { foreignKey: 'user_id', sourceKey: 'id' });
Customer.belongsTo(Users, { foreignKey: 'user_id', sourceKey: 'id' });

Users.hasMany(Comment, { foreignKey: 'user_id', sourceKey: 'id' });
Comment.belongsTo(Users, { foreignKey: 'user_id', targetId: 'id' });

Users.hasOne(Like, { foreignKey: 'user_id', sourceKey: 'id' })
Like.belongsTo(Users, { foreignKey: 'user_id', sourceKey: 'id' });

Users.hasMany(Review, { foreignKey: 'user_id', sourceKey: 'id' });
Review.belongsTo(Users, { foreignKey: 'user_id', sourceKey: 'id' });

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Question }) {
      this.hasMany(Question, { foreignKey: "user_id" });
    }
  }
  User.init(
    {
      login: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};

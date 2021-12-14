"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LikeDislike extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.LikeDislike.belongsTo(models.User, {
        foreignKey: {
          allowNull: false,
        },
      });

      models.LikeDislike.belongsTo(models.Article, {
        foreignKey: {
          allowNull: false,
        },
      });
    }
  }
  LikeDislike.init(
    {
      operationtype: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "LikeDislike",
    }
  );
  return LikeDislike;
};

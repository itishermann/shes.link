'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class entries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  entries.init({
    key: DataTypes.TEXT,
    url: DataTypes.TEXT,
    token: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'entries',
  });
  return entries;
};
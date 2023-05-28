'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User)
      this.belongsTo(models.Massage)

    }
  }
  Order.init({
    UserId: DataTypes.INTEGER,
    MassageId: DataTypes.INTEGER,
    location: DataTypes.STRING,
    newPrice: DataTypes.INTEGER,
    status: DataTypes.STRING,
    bookingDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
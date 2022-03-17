const {
  Model,
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
      this.belongsToMany(models.Food, { through: 'Baskets', foreignKey: 'odrer_id' });
      this.belongsTo(models.Users, { foreignKey: 'user_id' });
      this.belongsTo(models.Couriers, { foreignKey: 'courier_id' });
    }
  }
  Order.init({
    user_id: DataTypes.INTEGER,
    courier_id: DataTypes.INTEGER,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};

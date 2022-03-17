const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Order, { through: 'Baskets', foreignKey: 'food_id' });
    }
  }
  Food.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      sale: DataTypes.INTEGER,
      count: DataTypes.INTEGER,
      img: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Food',
    },
  );
  return Food;
};

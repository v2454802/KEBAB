const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Orders, { foreignKey: 'user_id' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.INTEGER,
    adress: DataTypes.STRING,
    role: DataTypes.INTEGER,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

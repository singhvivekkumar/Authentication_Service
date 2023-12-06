'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt');

const { SALT } = require('../config/Server-Config');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Role, {
        through: 'User_Role',
      })
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Vivek"
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len:[8, 20]
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  //trigger to encrypt the password before inserted into database
  User.beforeCreate((user)=>{
    const encryptedPassword = bcrypt.hashSync(user.password, SALT);
    user.password = encryptedPassword;
  });
  return User;
};
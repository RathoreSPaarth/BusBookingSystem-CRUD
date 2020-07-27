const { DataTypes } = require("sequelize");
const busDB = require("../config/busDB");

const User = busDB.define("users", {
  uid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "name"
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "age"
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "email",
    unique: true,
    primaryKey: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "pswd"
  }
});

module.exports = User;

const { DataTypes } = require("sequelize");
const busDB = require("../config/busDB");

const Bus = busDB.define("bus", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  busName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "bus_name"
  },
  from: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "from"
  },
  to: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "to"
  },
  time: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "time"
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "type"
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "price"
  }
});

module.exports = Bus;

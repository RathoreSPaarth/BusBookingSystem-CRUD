const { DataTypes } = require("sequelize");
const busDB = require("../config/busDB");

const Volvo = busDB.define("volvo", {
  seatNumber: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "seat_number"
  },
  status: {
    type: DataTypes.BOOLEAN,
    field: "status",
    defaultValue: false
  },
  busid: {
    type: DataTypes.INTEGER,
    field: "busid",
    defaultValue: 3
  }
});

module.exports = Volvo;

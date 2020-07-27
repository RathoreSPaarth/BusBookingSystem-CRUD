const { DataTypes } = require("sequelize");
const busDB = require("../config/busDB");

const Mtc = busDB.define("mtc", {
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
    defaultValue: 4
  }
});

module.exports = Mtc;

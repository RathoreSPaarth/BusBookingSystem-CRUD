const { DataTypes } = require("sequelize");
const busDB = require("../config/busDB");

const Amma = busDB.define("amma", {
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
    defaultValue: 2
  }
});

module.exports = Amma;

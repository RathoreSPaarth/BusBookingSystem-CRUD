const { DataTypes } = require("sequelize");
const busDB = require("../config/busDB");

const Volvo2210 = busDB.define("volvo2210", {
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
    defaultValue: 1
  }
});

module.exports = Volvo2210;

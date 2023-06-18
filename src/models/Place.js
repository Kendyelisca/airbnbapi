const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Place = sequelize.define("place", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  photos: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  perks: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  extraInfo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  checkIn: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  checkOut: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  maxGuests: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  //userId
});

module.exports = Place;

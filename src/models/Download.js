const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Download = sequelize.define("download", {
  link: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Download;

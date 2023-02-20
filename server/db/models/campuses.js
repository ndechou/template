const { Sequelize } = require('sequelize');
const db = require('../database');

const Campus = db.define('campus', {
 name: { 
  type: Sequelize.STRING,
   allowNull: false,
   validate: {
     notEmpty: true
   }
 },
 imageUrl: {
  type: Sequelize.STRING,
  defaultValue: "",
  // validate: {
  //   isUrl: ""
  // }
 },
 description: Sequelize.TEXT
})


module.exports = Campus;
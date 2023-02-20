const { Sequelize } = require('sequelize');
const db = require('../database');

const Student = db.define('students', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.TEXT,
    validate: {
      isEmail: true
    }
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: "",
  },
  gpa: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      max: 4
    }
  }
});


module.exports = Student;

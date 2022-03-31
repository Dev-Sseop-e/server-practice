'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Form extends Model {
    static associate(models) {
      Form.belongsTo(models.User, {foreignKey: 'userId', as: 'User'}) //form.getUser()
      Form.hasMany(models.FormQuestion, {
        foreignKey: "formId",
        as: 'FormQuestions'}) //form.getFormQuestions()
    }
  };
  Form.init({
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Form',
  });
  return Form;
};

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FormQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      FormQuestion.belongsTo(models.Form,
        {
          foreignKey: 'formId',
          as: 'Form'
        }
      )
      FormQuestion.hasMany(models.UserQuestionAnswer, 
        {
        foreignKey: "formQuestionId",
        as: 'UserQuestionAnswers'}
      ) //form.getFormQuestions()
      //formQuestion.getUserQuestionAnswers()
    }
  };
  FormQuestion.init({
    formId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    questionType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FormQuestion',
  });
  return FormQuestion;
};
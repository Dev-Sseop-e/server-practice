'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserQuestionAnswer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserQuestionAnswer.belongsTo(models.FormQuestion, {foreignKey: 'formQuestionId', as: 'FormQuestion'}) //form.getUser()      
    }
  };
  UserQuestionAnswer.init({
    userId: DataTypes.INTEGER,
    uuid: DataTypes.STRING,
    formQuestionId: DataTypes.INTEGER,
    answerIndex: DataTypes.INTEGER,
    answerTxt: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'UserQuestionAnswer',
  });
  return UserQuestionAnswer;
};
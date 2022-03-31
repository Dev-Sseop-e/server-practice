'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('FormQuestions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      formId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // User hasMany WorkingDays n:n
          model: 'Forms',
          key: 'id'
        }
      },

      title: {
        type: Sequelize.STRING
      },
      questionType: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('FormQuestions');
  }
};
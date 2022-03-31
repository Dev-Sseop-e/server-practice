'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */


    await queryInterface.changeColumn('Forms', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Users", //table name..
        key: "id"
      }
    })

    await queryInterface.changeColumn('FormQuestions', 'formId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Forms",
        key: "id"
      }
    })





  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

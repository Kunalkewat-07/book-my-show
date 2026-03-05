'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Theaters", "city_id", {
      type: Sequelize.INTEGER,
      allowNull: true,
      references:{
        model: 'Cities',
        key: 'city_id'
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Theaters", "city_id");
  }
};


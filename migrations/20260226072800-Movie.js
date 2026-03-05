'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.createTable('Movies', {

      movie_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      title: {
        type: Sequelize.STRING,
        allowNull: false
      },

      language: {
        type: Sequelize.STRING,
        allowNull: false
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false
      },

      genre: {
        type: Sequelize.STRING,
        allowNull: false
      },

      duration_time: {
        type: Sequelize.INTEGER, // store in minutes (example: 150)
        allowNull: false
      },

      release_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },

      description: {
        type: Sequelize.TEXT,
        allowNull: true
      },

      isDeleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },

     deletedAt: {
        type: Sequelize.DATE,
        allowNull: true
      },  

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }

    });
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.dropTable('Movies');
  }
};

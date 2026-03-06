'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('MovieTheaters',{

      movie_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Movies',
          key:'movie_id'
        },
          onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      theater_id:{
        type: Sequelize.INTEGER,
        references:{
          model: 'Theaters',
          key: 'theater_id'
        },
          onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      
      screen_id: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Screens',
          key: 'screen_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
       deletedAt: {
        type: Sequelize.DATE,
        allowNull: true
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
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
      
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('MovieTheaters');
  }
};

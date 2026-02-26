'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 await queryInterface.createTable('Screens', {
  
      screeen_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      theater_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Theaters',
          key: 'theater_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE' 
      
      },
      screen_no:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      total_seats: {
        type: Sequelize.INTEGER,
        allowNull: false
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
  })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Screens');
  }
};

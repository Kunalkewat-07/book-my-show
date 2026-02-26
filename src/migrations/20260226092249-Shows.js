'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Shows', {
      show_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      screen_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Screens',
          key: 'screeen_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      movie_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Movies',
          key: 'movie_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      start_time : {
        type : Sequelize.DATE,
        allowNull : false
      },
      end_time : {
        type : Sequelize.DATE,
        allowNull : false
      },
      ticket_price : {
        type : Sequelize.FLOAT,
        allowNull : false
      },
      isActive: {
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
  await queryInterface.dropTable('Shows');
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Seats', {
      seat_id: {
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
      seat_number : {
        type : Sequelize.STRING,
        allowNull : false
      },
      is_booked : {
        type : Sequelize.BOOLEAN,
        allowNull : false,
        defaultValue : false
      },
      price : {
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
    await queryInterface.dropTable('Seats');
  }
};

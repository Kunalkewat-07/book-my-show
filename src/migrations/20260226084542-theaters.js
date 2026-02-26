'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Theaters', {
      theater_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name:{
        type: Sequelize.STRING,
      allowNull: false
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      owner_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'Users',
          key: 'user_id'
        }
      },
      opening_time: {
      type: Sequelize.TIME,
      allowNull: false
      },

      closing_time:{
        type: Sequelize.TIME,
        allowNull: false
      },
      
      Holiday:{
        type: Sequelize.STRING,
        allowNull : false
      },
      status:{
        type: Sequelize.ENUM('active', 'inactive'),
        allowNull: false,
        defaultValue: 'active'
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
    await queryInterface.dropTable('Theaters');
  }
};

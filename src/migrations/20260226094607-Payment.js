'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Payments', {
      payment_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      booking_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Bookings',
          key: 'booking_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      amount : {
        type : Sequelize.FLOAT,
        allowNull : false
      },
      payment_method : {
        type : Sequelize.STRING,
        allowNull : false
      },
      payment_status : {
        type : Sequelize.ENUM('completed', 'failed', 'pending'),
        allowNull : false,
        defaultValue : 'pending'
      },
      transaction_id : {
        type : Sequelize.STRING,
        allowNull : true
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
      paid_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: new Date()
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
   await queryInterface.dropTable('Payments');
  }
};

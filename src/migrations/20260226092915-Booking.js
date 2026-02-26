'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('Bookings', {
    
      booking_id: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
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
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'user_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE' 
      },

      show_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Shows',
          key: 'show_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE' 
      },

      seat_id : {       
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Seats',
          key: 'seat_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE' 
      },

      booking_time : {
        type : Sequelize.DATE,
        allowNull : false,
        defaultValue : Sequelize.NOW
      },

      status:{
        type: Sequelize.ENUM('booked', 'cancelled'),
        allowNull: false,
        defaultValue: 'booked'
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
   await queryInterface.dropTable('Bookings');
  }
};

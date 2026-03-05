  'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    

   
    await queryInterface.addColumn('Seats','seat_type',{
      type: Sequelize.STRING,
      allowNull: false
    });

    await queryInterface.removeColumn('Seats','is_booked');


  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeColumn('Seats','seat_type');
   await queryInterface.removeColumn('Screens','screen_id');
   
  }
};


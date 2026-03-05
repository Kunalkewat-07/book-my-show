'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addColumn('Bookings','MT_id',{
    type: Sequelize.INTEGER,
    references: {
      model: 'MovieTheaters',
      key: 'MT_id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
   });

   await queryInterface.addColumn('Bookings','total_amount',{
    type: Sequelize.DECIMAL,
    allowNUll: false
   });

    await queryInterface.removeColumn('Bookings','movie_id');
     await queryInterface.removeColumn('Bookings','show_id');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Bookings','MT_id');
  }
  
};

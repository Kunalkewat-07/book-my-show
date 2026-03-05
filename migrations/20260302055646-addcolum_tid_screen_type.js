'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.addColumn('Screens','theater_id',{
     type: Sequelize.INTEGER,
     references: {
       model: 'Theaters',
       key: "theater_id"
     },
     onDelete: 'CASCADE',
     onUpdate: 'CASCADE'
   });
   
    await queryInterface.addColumn('Screens','screen_type',{
      type: Sequelize.STRING,
      allowNull: false
    });


  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeColumn('Screens','screen_type');
   await queryInterface.removeColumn('Screens','theater_id');
  }
};
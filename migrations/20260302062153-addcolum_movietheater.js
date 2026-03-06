'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.addColumn('MovieTheaters','price',{
      type: Sequelize.DECIMAL,
      allowNUll: false
    });

    await queryInterface.addColumn('MovieTheaters','MT_id',{
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    })

      await queryInterface.addColumn('MovieTheaters','start_time',{
      type: Sequelize.TIME,
    });

      // await queryInterface.removeColumn('MovieTheaters','show_id');

  },

  async down (queryInterface, Sequelize) {
      
       await queryInterface.removeColumn('MovieTheaters','price');

  }
};

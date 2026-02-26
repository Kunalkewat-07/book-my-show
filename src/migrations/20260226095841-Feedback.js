'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('Feedbacks', {  
      feedback_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
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
      rating : {
        type : Sequelize.INTEGER,
        allowNull : false
      },
  })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Feedbacks')
  }
};

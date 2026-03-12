'use strict';

const { faker } = require('@faker-js/faker');

module.exports = {
  async up(queryInterface, Sequelize) {

    const users = await queryInterface.sequelize.query(
      `SELECT user_id FROM Users`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    const showSeats = await queryInterface.sequelize.query(
      `
      SELECT M.MT_id, S.seat_id
      FROM Seats S
      JOIN MovieTheaters M ON M.screen_id = S.screen_id
      `,
      { type: Sequelize.QueryTypes.SELECT }
    );

    // Shuffle all show-seat combinations
    const shuffled = faker.helpers.shuffle(showSeats);

    // Limit to 10000 unique combinations
    const selected = shuffled.slice(0, 100000);

    const statuses = ["booked", "cancelled", "wait-list"];

    const bookings = selected.map(entry => ({
      user_id: faker.helpers.arrayElement(users).user_id,
      seat_id: entry.seat_id,
      MT_id: entry.MT_id,
      booking_time: faker.date.recent({ days: 10 }),
      status: faker.helpers.arrayElement(statuses),
      total_amount: faker.number.int({ min: 150, max: 600 })
    }));

    await queryInterface.bulkInsert('Bookings', bookings);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Bookings', null, {});
  }
};
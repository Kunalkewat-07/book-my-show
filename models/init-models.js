var DataTypes = require("sequelize").DataTypes;
var _booking = require("./booking");
var _city = require("./city");
var _feedback = require("./feedback");
var _movieTheater = require("./movieTheater");
var _movie = require("./movie");
var _payment = require("./payment");
var _screen = require("./screen");
var _seat = require("./seat");
var _sequelizeMetum = require("./sequelizeMetum");
var _show = require("./show");
var _theater = require("./theater");
var _user = require("./user");

function initModels(sequelize) {
  var booking = _booking(sequelize, DataTypes);
  var city = _city(sequelize, DataTypes);
  var feedback = _feedback(sequelize, DataTypes);
  var movieTheater = _movieTheater(sequelize, DataTypes);
  var movie = _movie(sequelize, DataTypes);
  var payment = _payment(sequelize, DataTypes);
  var screen = _screen(sequelize, DataTypes);
  var seat = _seat(sequelize, DataTypes);
  var sequelizeMetum = _sequelizeMetum(sequelize, DataTypes);
  var show = _show(sequelize, DataTypes);
  var theater = _theater(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  payment.belongsTo(booking, { as: "booking", foreignKey: "booking_id"});
  booking.hasMany(payment, { as: "Payments", foreignKey: "booking_id"});
  theater.belongsTo(city, { as: "city", foreignKey: "city_id"});
  city.hasMany(theater, { as: "Theaters", foreignKey: "city_id"});
  booking.belongsTo(movieTheater, { as: "MT", foreignKey: "MT_id"});
  movieTheater.hasMany(booking, { as: "Bookings", foreignKey: "MT_id"});
  feedback.belongsTo(movie, { as: "movie", foreignKey: "movie_id"});
  movie.hasMany(feedback, { as: "Feedbacks", foreignKey: "movie_id"});
  movieTheater.belongsTo(movie, { as: "movie", foreignKey: "movie_id"});
  movie.hasMany(movieTheater, { as: "MovieTheaters", foreignKey: "movie_id"});
  movieTheater.belongsTo(screen, { as: "screen", foreignKey: "screen_id"});
  screen.hasMany(movieTheater, { as: "MovieTheaters", foreignKey: "screen_id"});
  seat.belongsTo(screen, { as: "screen", foreignKey: "screen_id"});
  screen.hasMany(seat, { as: "Seats", foreignKey: "screen_id"});
  booking.belongsTo(seat, { as: "seat", foreignKey: "seat_id"});
  seat.hasMany(booking, { as: "Bookings", foreignKey: "seat_id"});
  movieTheater.belongsTo(theater, { as: "theater", foreignKey: "theater_id"});
  theater.hasMany(movieTheater, { as: "MovieTheaters", foreignKey: "theater_id"});
  screen.belongsTo(theater, { as: "theater", foreignKey: "theater_id"});
  theater.hasMany(screen, { as: "Screens", foreignKey: "theater_id"});
  booking.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(booking, { as: "Bookings", foreignKey: "user_id"});
  feedback.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(feedback, { as: "Feedbacks", foreignKey: "user_id"});
  theater.belongsTo(user, { as: "owner", foreignKey: "owner_id"});
  user.hasMany(theater, { as: "Theaters", foreignKey: "owner_id"});

  return {
    booking,
    city,
    feedback,
    movieTheater,
    movie,
    payment,
    screen,
    seat,
    sequelizeMetum,
    show,
    theater,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

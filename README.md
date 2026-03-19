# movie management API

This project is a REST API for managing movie bookings.

## Features
- User authentication
- Movie management
- Booking system
- Feedback system

## Tech Stack
- Node.js
- Express.js
- MySQL
- Sequelize
- JWT Authentication

## Installation

1. Clone the repository
git clone https://github.com/Kunalkewat-07/book-my-show.git

2. Install dependencies
npm install

3. Setup environment variables
Create a `.env` file.

4. Run the server
npm run dev

## Project Structure
boo-my-show
├── config/
├── controllers/
├── models/
├── routes/
├── middlewares/
├── validate/
├── utils/
├──server.js
├── migrations/
├── seeders/
├── .env
├── swagger.json
├── package.json
└── README.md



## Endpoints 

1.-- Auth api's
POST       api/auth/signup
POST       api/auth/login
GET        api/auth/getUser

2.--booking api's
POST       api/auth/book
POST       api/auth/cencalBooking/:booking_id

3.--Feedbacks api's
POST       api/auth/feedback/add-feedback
DELETE     api/auth/feedback/delete-feedback/:fid
PUT        api/auth/feedback/update-feedback/:fid


4.--Admin api's
GET        api/auth/admin/getTopMovies
GET        api/auth/admin/getMonthlyRevenue
GET        api/auth/admin/getAlmostFullShows
GET        api/auth/admin/getTheaterRevenue
GET        api/auth/admin/getSeatPreference
GET        api/auth/admin/getTopRatedMovies
GET        api/auth/admin/preBookingHours
GET        api/auth/admin/getCencelledUsers
GET        api/auth/admin/getCityWiseRevenue

5.--Theater api's
POST       api/theater/create-theater
PUT        api/theater/update/:theater_id
DELETE     api/theater/delete/:theater_id
GET        api/theater/get-theater/:theater_id
GET        api/theater/get-all-theaters


6.--Screen api's
POST       api/theater/screen/create-screen/:Tid
PUT        api/theater/screen/update-screen/:sid
DELETE     api/theater/screen/delete-screen/:sid


7.--Movie api's
GET        api/movie/get-movie/:mid
GET        api/movie/getall-movie
POST       api/movie/create-movie
DELETE     api/movie/delete-movie/:mid
PUT        api/movie/update-movie/:mid

8.--Cities api's
POST       api/city/add-city
GET        api/city/getAll-city


9.--Seat api's
POST       api/seat/create-seat/:screen_id
DELETE     api/seat/delete-seat/:seat_id


10.--show api's
GET        api/theater/getShow/:movie_id
POST       api/theater/addShow
PUT        api/theater/updateShow/:MT_Id
DELETE     api/theater/deleteShow/:MT_Id



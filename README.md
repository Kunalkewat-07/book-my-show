# Book-my-show

npx sequelize-cli -h localhost -d BookMyShow -u root -p 3306 -x Mysql@123 -e mysql




// 'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Cities', [
  { city_id: 1, name: "New York", state: "New York", country: "USA" },
  { city_id: 2, name: "Los Angeles", state: "California", country: "USA" },
  { city_id: 3, name: "Chicago", state: "Illinois", country: "USA" },
  { city_id: 4, name: "Houston", state: "Texas", country: "USA" },
  { city_id: 5, name: "Phoenix", state: "Arizona", country: "USA" },
  { city_id: 6, name: "Philadelphia", state: "Pennsylvania", country: "USA" },
  { city_id: 7, name: "San Antonio", state: "Texas", country: "USA" },
  { city_id: 8, name: "San Diego", state: "California", country: "USA" },
  { city_id: 9, name: "Dallas", state: "Texas", country: "USA" },
  { city_id: 10, name: "San Jose", state: "California", country: "USA" },
  { city_id: 11, name: "Austin", state: "Texas", country: "USA" },
  { city_id: 12, name: "Jacksonville", state: "Florida", country: "USA" },
  { city_id: 13, name: "Fort Worth", state: "Texas", country: "USA" },
  { city_id: 14, name: "Columbus", state: "Ohio", country: "USA" },
  { city_id: 15, name: "Charlotte", state: "North Carolina", country: "USA" },
  { city_id: 16, name: "San Francisco", state: "California", country: "USA" },
  { city_id: 17, name: "Indianapolis", state: "Indiana", country: "USA" },
  { city_id: 18, name: "Seattle", state: "Washington", country: "USA" },
  { city_id: 19, name: "Denver", state: "Colorado", country: "USA" },
  { city_id: 20, name: "Boston", state: "Massachusetts", country: "USA" },
  { city_id: 21, name: "El Paso", state: "Texas", country: "USA" },
  { city_id: 22, name: "Nashville", state: "Tennessee", country: "USA" },
  { city_id: 23, name: "Detroit", state: "Michigan", country: "USA" },
  { city_id: 24, name: "Oklahoma City", state: "Oklahoma", country: "USA" },
  { city_id: 25, name: "Portland", state: "Oregon", country: "USA" },
  { city_id: 26, name: "London", state: "England", country: "United Kingdom" },
  { city_id: 27, name: "Birmingham", state: "England", country: "United Kingdom" },
  { city_id: 28, name: "Manchester", state: "England", country: "United Kingdom" },
  { city_id: 29, name: "Leeds", state: "England", country: "United Kingdom" },
  { city_id: 30, name: "Glasgow", state: "Scotland", country: "United Kingdom" },
  { city_id: 31, name: "Liverpool", state: "England", country: "United Kingdom" },
  { city_id: 32, name: "Newcastle upon Tyne", state: "England", country: "United Kingdom" },
  { city_id: 33, name: "Sheffield", state: "England", country: "United Kingdom" },
  { city_id: 34, name: "Bristol", state: "England", country: "United Kingdom" },
  { city_id: 35, name: "Cardiff", state: "Wales", country: "United Kingdom" },
  { city_id: 36, name: "Edinburgh", state: "Scotland", country: "United Kingdom" },
  { city_id: 37, name: "Leicester", state: "England", country: "United Kingdom" },
  { city_id: 38, name: "Coventry", state: "England", country: "United Kingdom" },
  { city_id: 39, name: "Bradford", state: "England", country: "United Kingdom" },
  { city_id: 40, name: "Nottingham", state: "England", country: "United Kingdom" },
  { city_id: 41, name: "Hull", state: "England", country: "United Kingdom" },
  { city_id: 42, name: "Plymouth", state: "England", country: "United Kingdom" },
  { city_id: 43, name: "Stoke-on-Trent", state: "England", country: "United Kingdom" },
  { city_id: 44, name: "Derby", state: "England", country: "United Kingdom" },
  { city_id: 45, name: "Southampton", state: "England", country: "United Kingdom" },
  { city_id: 46, name: "Mumbai", state: "Maharashtra", country: "India" },
  { city_id: 47, name: "Delhi", state: "Delhi", country: "India" },
  { city_id: 48, name: "Beng}
    ])
  }
}
  <!--  -->












'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [

      { user_id: 201, name: "Aarav Sharma", email: "aarav1@example.com", password: "$2b$10$hashvalue", phone: "9100000001", role: "user", dateOfBirth: "1995-01-11" },
      { user_id: 202, name: "Vivaan Patel", email: "vivaan2@example.com", password: "$2b$10$hashvalue", phone: "9100000002", role: "vendor", dateOfBirth: "1994-02-12" },
      { user_id: 3, name: "Aditya Singh", email: "aditya3@example.com", password: "$2b$10$hashvalue", phone: "9100000003", role: "user", dateOfBirth: "1993-03-13" },
      { user_id: 4, name: "Krishna Verma", email: "krishna4@example.com", password: "$2b$10$hashvalue", phone: "9100000004", role: "vendor", dateOfBirth: "1992-04-14" },
      { user_id: 5, name: "Ishaan Gupta", email: "ishaan5@example.com", password: "$2b$10$hashvalue", phone: "9100000005", role: "user", dateOfBirth: "1991-05-15" },

      { user_id: 6, name: "Rohan Mehta", email: "rohan6@example.com", password: "$2b$10$hashvalue", phone: "9100000006", role: "vendor", dateOfBirth: "1990-06-16" },
      { user_id: 7, name: "Arjun Nair", email: "arjun7@example.com", password: "$2b$10$hashvalue", phone: "9100000007", role: "user", dateOfBirth: "1996-07-17" },
      { user_id: 8, name: "Kabir Joshi", email: "kabir8@example.com", password: "$2b$10$hashvalue", phone: "9100000008", role: "vendor", dateOfBirth: "1997-08-18" },
      { user_id: 9, name: "Yash Malhotra", email: "yash9@example.com", password: "$2b$10$hashvalue", phone: "9100000009", role: "user", dateOfBirth: "1998-09-19" },
      { user_id: 10, name: "Manav Reddy", email: "manav10@example.com", password: "$2b$10$hashvalue", phone: "9100000010", role: "vendor", dateOfBirth: "1999-10-20" },

      { user_id: 11, name: "Rahul Das", email: "rahul11@example.com", password: "$2b$10$hashvalue", phone: "9100000011", role: "user", dateOfBirth: "1995-11-21" },
      { user_id: 12, name: "Siddharth Jain", email: "sid12@example.com", password: "$2b$10$hashvalue", phone: "9100000012", role: "vendor", dateOfBirth: "1994-12-22" },
      { user_id: 13, name: "Karan Yadav", email: "karan13@example.com", password: "$2b$10$hashvalue", phone: "9100000013", role: "user", dateOfBirth: "1993-01-23" },
      { user_id: 14, name: "Mohit Tiwari", email: "mohit14@example.com", password: "$2b$10$hashvalue", phone: "9100000014", role: "vendor", dateOfBirth: "1992-02-24" },
      { user_id: 15, name: "Harsh Vardhan", email: "harsh15@example.com", password: "$2b$10$hashvalue", phone: "9100000015", role: "user", dateOfBirth: "1991-03-25" },

      { user_id: 96, name: "Deepak Kulkarni", email: "deepak96@example.com", password: "$2b$10$hashvalue", phone: "9100000096", role: "vendor", dateOfBirth: "1996-04-06" },
      { user_id: 97, name: "Ankit Bansal", email: "ankit97@example.com", password: "$2b$10$hashvalue", phone: "9100000097", role: "user", dateOfBirth: "1997-05-07" },
      { user_id: 98, name: "Vikram Saini", email: "vikram98@example.com", password: "$2b$10$hashvalue", phone: "9100000098", role: "vendor", dateOfBirth: "1998-06-08" },
      { user_id: 99, name: "Lokesh Chauhan", email: "lokesh99@example.com", password: "$2b$10$hashvalue", phone: "9100000099", role: "user", dateOfBirth: "1999-07-09" },
      { user_id: 100, name: "Pratik Desai", email: "pratik100@example.com", password: "$2b$10$hashvalue", phone: "9100000100", role: "vendor", dateOfBirth: "1990-08-10" },
      { user_id: 101, name: "Neeraj Mishra", email: "neeraj101@example.com", password: "$2b$10$hashvalue", phone: "9100000101", role: "user", dateOfBirth: "1991-09-11" },
      { user_id: 102, name: "Sahil Arora", email: "sahil102@example.com", password: "$2b$10$hashvalue", phone: "9100000102", role: "vendor", dateOfBirth: "1992-10-12" },
      { user_id: 103, name: "Tarun Kapoor", email: "tarun103@example.com", password: "$2b$10$hashvalue", phone: "9100000103", role}
    ])
  }
}






'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert("Cities", [
  { city_id: 186, name: "Manali", state: "Himachal Pradesh", country: "India" },
  { city_id: 187, name: "Dharamshala", state: "Himachal Pradesh", country: "India" },
  { city_id: 188, name: "Solan", state: "Himachal Pradesh", country: "India" },
  { city_id: 189, name: "Mandi", state: "Himachal Pradesh", country: "India" },

  { city_id: 190, name: "Srinagar", state: "Jammu and Kashmir", country: "India" },
  { city_id: 191, name: "Jammu", state: "Jammu and Kashmir", country: "India" },
  { city_id: 192, name: "Anantnag", state: "Jammu and Kashmir", country: "India" },
  { city_id: 193, name: "Baramulla", state: "Jammu and Kashmir", country: "India" },
  { city_id: 194, name: "Udhampur", state: "Jammu and Kashmir", country: "India" },

  { city_id: 195, name: "Leh", state: "Ladakh", country: "India" },
  { city_id: 196, name: "Kargil", state: "Ladakh", country: "India" },

  { city_id: 197, name: "Port Blair", state: "Andaman and Nicobar Islands", country: "India" },
  { city_id: 198, name: "Kavaratti", state: "Lakshadweep", country: "India" },

  { city_id: 199, name: "New Delhi", state: "Delhi", country: "India" },

  { city_id: 200, name: "Faridabad", state: "Haryana", country: "India" },
  { city_id: 201, name: "Gurugram", state: "Haryana", country: "India" },
  { city_id: 202, name: "Panipat", state: "Haryana", country: "India" },
  { city_id: 203, name: "Ambala", state: "Haryana", country: "India" },
  { city_id: 204, name: "Hisar", state: "Haryana", country: "India" },
  { city_id: 205, name: "Karnal", state: "Haryana", country: "India" },
  { city_id: 206, name: "Sonipat", state: "Haryana", country: "India" },
  { city_id: 207, name: "Rohtak", state: "Haryana", country: "India" },
  { city_id: 208, name: "Panchkula", state: "Haryana", country: "India" },
  { city_id: 209, name: "Yamunanagar", state: "Haryana", country: "India" },
  { city_id: 210, name: "Rewari", state: "Haryana", country: "India" },

  { city_id: 211, name: "Patna", state: "Bihar", country: "India" },
  { city_id: 212, name: "Gaya", state: "Bihar", country: "India" },
  { city_id: 213, name: "Muzaffarpur", state: "Bihar", country: "India" },
  { city_id: 214, name: "Bhagalpur", state: "Bihar", country: "India" },
  { city_id: 215, name: "Darbhanga", state: "Bihar", country: "India" },

  { city_id: 216, name: "Guwahati", state: "Assam", country: "India" },
  { city_id: 217, name: "Silchar", state: "Assam", country: "India" },
  { city_id: 218, name: "Dibrugarh", state: "Assam", country: "India" },
  { city_id: 219, name: "Jorhat", state: "Assam", country: "India" },
  { city_id: 220, name: "Tezpur", state: "Assam", country: "India" },

  { city_id: 221, name: "Imphal", state: "Manipur", country: "India" },
  { city_id: 222, name: "Shillong", state: "Meghalaya", country: "India" },
  { city_id: 223, name: "Aizawl", state: "Mizoram", country: "India" },
  { city_id: 224, name: "Kohima", state: "Nagaland", country: "India" },
  { city_id: 225, name: "Agartala", state: "Tripura", country: "India" },

  { city_id: 226, name: "Itanagar", state: "Arunachal Pradesh", country: "India" },
  { city_id: 227, name: "Gangtok", state: "Sikkim", country: "India" },
  { city_id: 228, name: "Puducherry", state: "Puducherry", country: "India" },
  { city_id: 229, name: "Daman", state: "Daman and Diu", country: "India" },
  { city_id: 230, name: "Silvassa", state: "Dadra and Nagar Haveli", country: "India" }
]);
    await queryInterface.bulkInsert("Theaters", [

      { theater_id: 1, name: "Galaxy Cinemas", address: "MG Road Complex", city_id: 5, owner_id: 12, opening_time: "09:00:00", closing_time: "23:30:00" },
      { theater_id: 2, name: "PVR Grand", address: "City Mall 2nd Floor", city_id: 12, owner_id: 25, opening_time: "10:00:00", closing_time: "23:45:00" },
      { theater_id: 3, name: "INOX }
    ])
  }
}



















     93, name: "Grand Urban Screens", address: "Central Junction", city_id: 159, owner_id: 20, opening_time: "08:45:00", closing_time: "22:45:00" },
      { theater_id: 94, name: "MovieTown Hub", address: "Lake Front", city_id: 169, owner_id: 9, opening_time: "09:15:00", closing_time: "23:10:00" },
      { theater_id: 95, name: "Vision Grand", address: "Highway Center", city_id: 179, owner_id: 18, opening_time: "09:00:00", closing_time: "23:59:00" },

      { theater_id: 96, name: "Urban Galaxy", address: "Central Mall", city_id: 189, owner_id: 27, opening_time: "10:00:00", closing_time: "23:20:00" },
      { theater_id: 97, name: "SkyMax Cinema", address: "Park Avenue", city_id: 199, owner_id: 36, opening_time: "09:00:00", closing_time: "23:40:00" },
      { theater_id: 98, name: "Dream Arena", address: "Metro Circle", city_id: 15, owner_id: 45, opening_time: "08:30:00", closing_time: "22:30:00" },
      { theater_id: 99, name: "Royal CineHub", address: "Market Street", city_id: 25, owner_id: 54, opening_time: "09:15:00", closing_time: "23:45:00" },
      { theater_id: 100, name: "Infinity Cineplex", address: "City Center Mall", city_id: 35, owner_id: 63, opening_time: "09:00:00", closing_time: "23:30:00" },

      { theater_id: 101, name: "CineVerse", address: "MG Extension Road", city_id: 48, owner_id: 70, opening_time: "09:00:00", closing_time: "23:20:00" },
      { theater_id: 102, name: "Grand Metro Screens", address: "City Walk Mall", city_id: 58, owner_id: 81, opening_time: "10:00:00", closing_time: "23:45:00" },
      { theater_id: 103, name: "Urban Plex", address: "Downtown Circle", city_id: 68, owner_id: 92, opening_time: "08:45:00", closing_time: "23:10:00" },
      { theater_id: 104, name: "SkyView Cinema", address: "Hill Top Plaza", city_id: 78, owner_id: 103, opening_time: "09:30:00", closing_time: "23:50:00" },
      { theater_id: 105, name: "Silver Star Multiplex", address: "Central Avenue", city_id: 88, owner_id: 114, opening_time: "09:00:00", closing_time: "23:30:00" },

      { theater_id: await queryInterface.bulkDelete("Theaters", [

      { theater_id: 1, name: "Galaxy Cinemas", address: "MG Road Complex", city_id: 5, owner_id: 12, opening_time: "09:00:00", closing_time: "23:30:00" },
      { theater_id: 2, name: "PVR Grand", address: "City Mall 2nd Floor", city_id: 12, owner_id: 25, opening_time: "10:00:00", closing_time: "23:45:00" },
      { theater_id: 3, name: "INOX Central", address: "Main Market Road", city_id: 20, owner_id: 33, opening_time: "08:30:00", closing_time: "23:00:00" },
      { theater_id: 4, name: "CineWorld", address: "Station Road", city_id: 45, owner_id: 41, opening_time: "09:15:00", closing_time: "22:45:00" },
      { theater_id: 5, name: "Silver Screen", address: "Lake View Plaza", city_id: 60, owner_id: 55, opening_time: "09:00:00", closing_time: "23:59:00" },

      { theater_id: 6, name: "Movie Palace", address: "Ring Road", city_id: 75, owner_id: 66, opening_time: "10:00:00", closing_time: "23:30:00" },
      { theater_id: 7, name: "Star Multiplex", address: "Airport Road", city_id: 88, owner_id: 72, opening_time: "08:45:00", closing_time: "23:15:00" },
      { theater_id: 8, name: "CineMax Pro", address: "Downtown Street", city_id: 95, owner_id: 84, opening_time: "09:30:00", closing_time: "23:50:00" },
      { theater_id: 9, name: "Dream Cinema", address: "Sector 18", city_id: 110, owner_id: 91, opening_time: "09:00:00", closing_time: "23:00:00" },
      { theater_id: 10, name: "Royal Theaters", address: "Central Avenue", city_id: 120, owner_id: 105, opening_time: "10:15:00", closing_time: "23:45:00" },

      { theater_id: 11, name: "Epic Screens", address: "Metro Plaza", city_id: 130, owner_id: 112, opening_time: "08:30:00", closing_time: "22:30:00" },
      { theater_id: 12, name: "Vision Cinemas", address: "Hill Road", city_id: 140, owner_id: 126, opening_time: "09:00:00", closing_time: "23:20:00" },
      { theater_id: 13, name: "City Gold", address: "Navrang Circle", city_id: 150, owner_id: 135, opening_time: "09:30:00", closing_time: "23:40:00" },
      { theater_id: 14, name: "Platinum Movies", address: "Industrial Area", city_id: 160, owner_id: 148, opening_time: "10:00:00", closing_time: "23:55:00" },
      { theater_id: 15, name: "Majestic Cinema", address: "Old Town Road", city_id: 170, owner_id: 159, opening_time: "08:45:00", closing_time: "22:45:00" },

      { theater_id: 16, name: "Sunrise Multiplex", address: "East End Mall", city_id: 180, owner_id: 165, opening_time: "09:00:00", closing_time: "23:00:00" },
      { theater_id: 17, name: "Moonlight Cinema", address: "West Street", city_id: 190, owner_id: 175, opening_time: "10:00:00", closing_time: "23:30:00" },
      { theater_id: 18, name: "Cine Square", address: "Market Yard", city_id: 25, owner_id: 182, opening_time: "09:15:00", closing_time: "23:10:00" },
      { theater_id: 19, name: "Grand Screens", address: "Highway Plaza", city_id: 35, owner_id: 195, opening_time: "08:30:00", closing_time: "22:50:00" },
      { theater_id: 20, name: "Prime Cinemas", address: "City Center", city_id: 42, owner_id: 199, opening_time: "09:00:00", closing_time: "23:45:00" },
{ theater_id: 21, name: "Metro Vision", address: "Central Market Street", city_id: 50, owner_id: 10, opening_time: "09:00:00", closing_time: "23:30:00" },
{ theater_id: 22, name: "Sky Cineplex", address: "Green Park Mall", city_id: 51, owner_id: 11, opening_time: "09:30:00", closing_time: "23:45:00" },
{ theater_id: 23, name: "Royal Dream Cinema", address: "Park Lane", city_id: 52, owner_id: 12, opening_time: "10:00:00", closing_time: "23:15:00" },
{ theater_id: 24, name: "Grand Palace Screens", address: "Riverfront Plaza", city_id: 53, owner_id: 13, opening_time: "08:45:00", closing_time: "22:50:00" },
{ theater_id: 25, name: "Galaxy Hub", address: "Mall Road", city_id: 54, owner_id: 14, opening_time: "09:00:00", closing_time: "23:20:00" },

{ theater_id: 26, name: "CinePrime", address: "Downtown Center", city_id: 55, owner_id: 15, opening_time: "09:15:00", closing_time: "23:40:00" },
{ theater_id: 27, name: "Silver Dream Screens", address: "Highway Plaza", city_id: 56, owner_id: 16, opening_time: "10:00:00", closing_time: "23:30:00" },
{ theater_id: 28, name: "Urban Grand Cinema", address: "Lake View Mall", city_id: 57, owner_id: 17, opening_time: "08:30:00", closing_time: "22:30:00" },
{ theater_id: 29, name: "Vision Cine Arena", address: "Market Square", city_id: 58, owner_id: 18, opening_time: "09:00:00", closing_time: "23:10:00" },
{ theater_id: 30, name: "Star Cine Palace", address: "Central Avenue", city_id: 59, owner_id: 19, opening_time: "09:45:00", closing_time: "23:55:00" },

{ theater_id: 31, name: "Mega Screens", address: "Metro City Mall", city_id: 60, owner_id: 20, opening_time: "09:00:00", closing_time: "23:30:00" },
{ theater_id: 32, name: "Dream Star Multiplex", address: "Town Hall Road", city_id: 61, owner_id: 21, opening_time: "10:15:00", closing_time: "23:45:00" },
{ theater_id: 33, name: "Platinum Vision", address: "City Plaza", city_id: 62, owner_id: 22, opening_time: "09:00:00", closing_time: "23:15:00" },
{ theater_id: 34, name: "CineWorld Arena", address: "Market Junction", city_id: 63, owner_id: 23, opening_time: "08:45:00", closing_time: "22:45:00" },
{ theater_id: 35, name: "Galaxy Multiplex", address: "High Street Mall", city_id: 64, owner_id: 24, opening_time: "09:30:00", closing_time: "23:20:00" },

{ theater_id: 36, name: "Royal Dream Arena", address: "City Ring Road", city_id: 65, owner_id: 25, opening_time: "09:00:00", closing_time: "23:50:00" },
{ theater_id: 37, name: "Epic Cine Palace", address: "Metro Square", city_id: 66, owner_id: 26, opening_time: "10:00:00", closing_time: "23:40:00" },
{ theater_id: 38, name: "Infinity Screens Hub", address: "Riverfront Mall", city_id: 67, owner_id: 27, opening_time: "09:00:00", closing_time: "23:30:00" },
{ theater_id: 39, name: "Urban Vision Cinema", address: "City Walk", city_id: 68, owner_id: 28, opening_time: "08:30:00", closing_time: "22:30:00" },
{ theater_id: 40, name: "Golden Cineplex", address: "Central Square", city_id: 69, owner_id: 29, opening_time: "09:15:00", closing_time: "23:10:00" },

{ theater_id: 41, name: "Dream Arena Screens", address: "Market Street", city_id: 70, owner_id: 30, opening_time: "09:00:00", closing_time: "23:45:00" },
{ theater_id: 42, name: "StarVision Multiplex", address: "Airport Road", city_id: 71, owner_id: 31, opening_time: "10:00:00", closing_time: "23:30:00" },
{ theater_id: 43, name: "Royal Screen Palace", address: "Town Center", city_id: 72, owner_id: 32, opening_time: "09:00:00", closing_time: "23:20:00" },
{ theater_id: 44, name: "CineHub Central", address: "Lake View Street", city_id: 73, owner_id: 33, opening_time: "08:45:00", closing_time: "22:45:00" },
{ theater_id: 45, name: "Galaxy CineWorld", address: "City Mall", city_id: 74, owner_id: 34, opening_time: "09:30:00", closing_time: "23:55:00" },

{ theater_id: 46, name: "Epic Dream Cinema", address: "Metro Avenue", city_id: 75, owner_id: 35, opening_time: "09:00:00", closing_time: "23:30:00" },
{ theater_id: 47, name: "Vision Square Screens", address: "Central Market", city_id: 76, owner_id: 36, opening_time: "10:00:00", closing_time: "23:40:00" },
{ theater_id: 48, name: "Urban Cine Palace", address: "City Square Mall", city_id: 77, owner_id: 37, opening_time: "09:00:00", closing_time: "23:15:00" },
{ theater_id: 49, name: "Grand Galaxy Screens", address: "Highway Center", city_id: 78, owner_id: 38, opening_time: "08:30:00", closing_time: "22:30:00" },
{ theater_id: 50, name: "Silver CineHub", address: "Market Plaza", city_id: 79, owner_id: 39, opening_time: "09:15:00", closing_time: "23:10:00" },

{ theater_id: 51, name: "Infinity Dream Cinema", address: "Central Plaza", city_id: 80, owner_id: 40, opening_time: "09:00:00", closing_time: "23:50:00" },
{ theater_id: 52, name: "MegaVision Arena", address: "City Ring Mall", city_id: 81, owner_id: 41, opening_time: "10:00:00", closing_time: "23:30:00" },
{ theater_id: 53, name: "Royal Star Cineplex", address: "Park Street", city_id: 82, owner_id: 42, opening_time: "09:00:00", closing_time: "23:20:00" },
{ theater_id: 54, name: "Urban Vision Hub", address: "Metro Hub Road", city_id: 83, owner_id: 43, opening_time: "08:45:00", closing_time: "22:45:00" },
{ theater_id: 55, name: "Galaxy Cine Arena", address: "Central Mall", city_id: 84, owner_id: 44, opening_time: "09:30:00", closing_time: "23:45:00" },

{ theater_id: 56, name: "DreamCity Cinema", address: "Market Avenue", city_id: 85, owner_id: 45, opening_time: "09:00:00", closing_time: "23:30:00" },
{ theater_id: 57, name: "Epic Vision Multiplex", address: "Lake Road", city_id: 86, owner_id: 46, opening_time: "10:00:00", closing_time: "23:55:00" },
{ theater_id: 58, name: "Silver Star Screens", address: "City Center Plaza", city_id: 87, owner_id: 47, opening_time: "09:00:00", closing_time: "23:20:00" },
{ theater_id: 59, name: "Prime CineSquare", address: "Downtown Mall", city_id: 88, owner_id: 48, opening_time: "08:30:00", closing_time: "22:40:00" },
  { theater_id: 60, name: "Urban Cineplex", address: "Riverfront Road", city_id: 155, owner_id: 150, opening_time: "09:00:00", closing_time: "23:30:00" },

      { theater_id: 61, name: "Metro CineHub", address: "Park Street", city_id: 10, owner_id: 14, opening_time: "09:00:00", closing_time: "23:00:00" },
      { theater_id: 62, name: "Skyline Screens", address: "City Square Mall", city_id: 22, owner_id: 28, opening_time: "10:00:00", closing_time: "23:45:00" },
      { theater_id: 63, name: "Crystal Cinemas", address: "Main Boulevard", city_id: 33, owner_id: 39, opening_time: "08:45:00", closing_time: "23:10:00" },
      { theater_id: 64, name: "Elite Multiplex", address: "Ring Road Plaza", city_id: 44, owner_id: 47, opening_time: "09:30:00", closing_time: "23:50:00" },
      { theater_id: 65, name: "Grand Vision", address: "Metro Junction", city_id: 55, owner_id: 58, opening_time: "09:00:00", closing_time: "23:30:00" },

      { theater_id: 66, name: "CineStar Arena", address: "Airport Circle", city_id: 66, owner_id: 69, opening_time: "10:15:00", closing_time: "23:55:00" },
      { theater_id: 67, name: "Urban Movies", address: "Lake Road", city_id: 77, owner_id: 82, opening_time: "09:00:00", closing_time: "23:15:00" },
      { theater_id: 68, name: "Platinum Screens", address: "High Street", city_id: 88, owner_id: 95, opening_time: "08:30:00", closing_time: "22:45:00" },
      { theater_id: 69, name: "Majestic Cineplex", address: "Central Park Area", city_id: 99, owner_id: 101, opening_time: "09:15:00", closing_time: "23:00:00" },
      { theater_id: 70, name: "DreamMax Cinema", address: "Market Road", city_id: 111, owner_id: 115, opening_time: "09:00:00", closing_time: "23:40:00" },

      { theater_id: 71, name: "SilverLine Cinemas", address: "West End Mall", city_id: 122, owner_id: 123, opening_time: "10:00:00", closing_time: "23:30:00" },
      { theater_id: 72, name: "Royal Screen Hub", address: "Navrangpura", city_id: 133, owner_id: 134, opening_time: "09:00:00", closing_time: "23:20:00" },
      { theater_id: 73, name: "Epic Cineworld", address: "Sector 21", city_id: 144, owner_id: 146, opening_time: "08:45:00", closing_time: "22:50:00" },
      { theater_id: 74, name: "Galaxy Arena", address: "Town Hall Road", city_id: 155, owner_id: 157, opening_time: "09:30:00", closing_time: "23:45:00" },
      { theater_id: 75, name: "Prime Vision", address: "Expressway Mall", city_id: 166, owner_id: 168, opening_time: "09:00:00", closing_time: "23:59:00" },

      { theater_id: 76, name: "City Lights Cinema", address: "East Market", city_id: 177, owner_id: 179, opening_time: "10:00:00", closing_time: "23:15:00" },
      { theater_id: 77, name: "Sunset Screens", address: "River View", city_id: 188, owner_id: 189, opening_time: "09:00:00", closing_time: "23:30:00" },
      { theater_id: 78, name: "VisionX Multiplex", address: "Central Plaza", city_id: 199, owner_id: 192, opening_time: "08:30:00", closing_time: "22:40:00" },
      { theater_id: 79, name: "CineNova", address: "Hill View Road", city_id: 18, owner_id: 174, opening_time: "09:15:00", closing_time: "23:10:00" },
      { theater_id: 80, name: "Movie Junction", address: "Metro Street", city_id: 29, owner_id: 163, opening_time: "09:00:00", closing_time: "23:45:00" },

      { theater_id: 81, name: "Infinity Screens", address: "Ring Plaza", city_id: 39, owner_id: 152, opening_time: "10:00:00", closing_time: "23:50:00" },
      { theater_id: 82, name: "Star CineMall", address: "Airport Link Road", city_id: 49, owner_id: 141, opening_time: "09:00:00", closing_time: "23:30:00" },
      { theater_id: 83, name: "CineWorld Pro", address: "Central Square", city_id: 59, owner_id: 130, opening_time: "08:45:00", closing_time: "22:45:00" },
      { theater_id: 84, name: "Golden Screen", address: "Mall Road", city_id: 69, owner_id: 119, opening_time: "09:30:00", closing_time: "23:20:00" },
      { theater_id: 85, name: "Urban Star Cinema", address: "Town Center", city_id: 79, owner_id: 108, opening_time: "09:00:00", closing_time: "23:40:00" },

      { theater_id: 86, name: "DreamCity Multiplex", address: "North Avenue", city_id: 89, owner_id: 97, opening_time: "10:15:00", closing_time: "23:55:00" },
      { theater_id: 87, name: "MegaVision Cinemas", address: "South Market", city_id: 99, owner_id: 86, opening_time: "09:00:00", closing_time: "23:15:00" },
      { theater_id: 88, name: "CineMax Arena", address: "East End", city_id: 109, owner_id: 75, opening_time: "08:30:00", closing_time: "22:30:00" },
      { theater_id: 89, name: "Royal Platinum", address: "City Ring Road", city_id: 119, owner_id: 64, opening_time: "09:00:00", closing_time: "23:00:00" },
      { theater_id: 90, name: "Silver Vision", address: "Metro Plaza", city_id: 129, owner_id: 53, opening_time: "09:30:00", closing_time: "23:50:00" },

      { theater_id: 91, name: "Epic Screens Plus", address: "West Plaza", city_id: 139, owner_id: 42, opening_time: "10:00:00", closing_time: "23:45:00" },
      { theater_id: 92, name: "CityWave Cinema", address: "Downtown Road", city_id: 149, owner_id: 31, opening_time: "09:00:00", closing_time: "23:30:00" },
      { theater_id:106, name: "DreamCity Screens", address: "Lake View Street", city_id: 98, owner_id: 125, opening_time: "10:15:00", closing_time: "23:55:00" },
      { theater_id: 107, name: "Royal City Cinema", address: "Market Junction", city_id: 108, owner_id: 136, opening_time: "09:00:00", closing_time: "23:15:00" },
      { theater_id: 108, name: "Galaxy Prime", address: "Ring Road Complex", city_id: 118, owner_id: 147, opening_time: "08:30:00", closing_time: "22:45:00" },
      { theater_id: 109, name: "Vision Arena", address: "Metro Hub", city_id: 128, owner_id: 158, opening_time: "09:15:00", closing_time: "23:00:00" },
      { theater_id: 110, name: "Epic CineSquare", address: "Town Center Mall", city_id: 138, owner_id: 169, opening_time: "09:00:00", closing_time: "23:40:00" },

      { theater_id: 111, name: "CineMax Grand", address: "Airport Road Plaza", city_id: 148, owner_id: 180, opening_time: "10:00:00", closing_time: "23:30:00" },
      { theater_id: 112, name: "Platinum CineHub", address: "Central Market", city_id: 158, owner_id: 191, opening_time: "09:00:00", closing_time: "23:20:00" },
      { theater_id: 113, name: "Majestic Arena", address: "Highway Point", city_id: 168, owner_id: 200, opening_time: "08:45:00", closing_time: "22:50:00" },
      { theater_id: 114, name: "Sunshine Screens", address: "West End Road", city_id: 178, owner_id: 17, opening_time: "09:30:00", closing_time: "23:45:00" },
      { theater_id: 115, name: "Urban Dream Cinema", address: "Riverfront Plaza", city_id: 188, owner_id: 29, opening_time: "09:00:00", closing_time: "23:59:00" },

      { theater_id: 116, name: "Infinity Grand", address: "City Gate Mall", city_id: 198, owner_id: 38, opening_time: "10:00:00", closing_time: "23:15:00" },
      { theater_id: 117, name: "StarWave Multiplex", address: "Sector 10", city_id: 14, owner_id: 49, opening_time: "09:00:00", closing_time: "23:30:00" },
      { theater_id: 118, name: "Crystal Cineplex", address: "Park Street Mall", city_id: 24, owner_id: 59, opening_time: "08:30:00", closing_time: "22:40:00" },
      { theater_id: 119, name: "Golden Vision", address: "Metro Station Road", city_id: 34, owner_id: 68, opening_time: "09:15:00", closing_time: "23:10:00" },
      { theater_id: 120, name: "Royal Infinity Screens", address: "Central Park Mall", city_id: 44, owner_id: 79, opening_time: "09:00:00", closing_time: "23:45:00" },

      { theater_id: 121, name: "CityMax Arena", address: "Main Street Plaza", city_id: 54, owner_id: 90, opening_time: "10:00:00", closing_time: "23:50:00" },
      { theater_id: 122, name: "Skyline Grand", address: "Downtown Center", city_id: 64, owner_id: 100, opening_time: "09:00:00", closing_time: "23:30:00" },
      { theater_id: 123, name: "Urban Silver Screens", address: "Mall Circle", city_id: 74, owner_id: 111, opening_time: "08:45:00", closing_time: "22:45:00" },
      { theater_id: 124, name: "DreamWave Cinema", address: "City Square", city_id: 84, owner_id: 122, opening_time: "09:30:00", closing_time: "23:20:00" },
      { theater_id: 125, name: "Epic Royal Cineplex", address: "Market Lane", city_id: 94, owner_id: 133, opening_time: "09:00:00", closing_time: "23:40:00" },

      { theater_id: 126, name: "VisionX Grand", address: "Central Expressway", city_id: 104, owner_id: 144, opening_time: "10:15:00", closing_time: "23:55:00" },
      { theater_id: 127, name: "StarCity Screens", address: "Town Hall Road", city_id: 114, owner_id: 155, opening_time: "09:00:00", closing_time: "23:15:00" },
      { theater_id: 128, name: "CineNova Prime", address: "Metro Avenue", city_id: 124, owner_id: 166, opening_time: "08:30:00", closing_time: "22:30:00" },
      { theater_id: 129, name: "Majestic Silver Hub", address: "Lake Road Plaza", city_id: 134, owner_id: 177, opening_time: "09:15:00", closing_time: "23:00:00" },
      { theater_id: 130, name: "Galaxy Dream Screens", address: "City Ring Mall", city_id: 144, owner_id: 188, opening_time: "09:00:00", closing_time: "23:30:00" }

    ])










    ///////////-------------------------------1st query

    select mv.name, mt.movie_id,count(*) as total_tickets 
from Bookings b  
join MovieTheaters mt 
on b.MT_id = mt.MT_id 
join Movies mv 
on mt.movie_id = mv.movie_id 
where status='booked'
group by mt.movie_id
order by total_tickets desc;

/////////--------------------------------------

-- 2ns query------------------
select date_format(booking_time,'%M-%Y') as monthly ,sum(total_amount) earning
from Bookings 
  where status = 'booked' and isDeleted =0  group by monthly;

-- 3rd query-------------------------------------
select movie_name ,theater_name,start_time,booked as booked_seats , total_seats,percentage 
 from (select mv.name as movie_name,
 t.name as theater_name,
 m2.start_time,
 bookingInfo.MT_id,
 bookingInfo.booked,
 s.total_seats,
 (bookingInfo.booked/s.total_seats)*90 as percentage
 from MovieTheaters m2 
 join (
 select MT_id,count(*) as booked 
 from Bookings b
 where status = 'booked' 
 group by MT_id 
 )as bookingInfo 
 on bookingInfo.MT_id = m2.MT_id 
 join Screens s on s.screen_id = m2.screen_id
 join Theaters t on m2.theater_id = t.theater_id
 join Movies mv on mv.movie_id = m2.movie_id) as allinfo
where percentage > 90;
 
 
 
-- 4th query ----------------------------------
 
 
select u.name,u.email,u.dateOfBirth, count(u.user_id) as total_users from Bookings b join Users u on u.user_id = b.user_id  where b.status  = 'booked'
group by b.user_id
having total_users > 3



----- 5th query--------------






{
  "openapi": "3.0.0",
  "info": {
    "title": "Post API",
    "description": "This API handles the retrieval of posts with pagination.",
    "version": "1.0.0"
  },
  "paths": {
   "/api/auth/signup": {
            "post": {
                "tags": [
                    "Auth"
                ],
                "summary": "Register user inside database",
                "operationId": "signUp",
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "email": {
                                        "type": "string",
                                        "description": "Enter email of the user for registeration",
                                        "example": "JayYadav@gmail.com"
                                    },
                                    "password": {
                                        "type": "string",
                                        "description": "Enter password for the identification",
                                        "example": "JayYadav900"
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "user register successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "message": {
                                            "type": "string",
                                            "example": "done bro!"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "user already exists",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "message": {
                                            "type": "string",
                                            "example": "user already exists"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "server-side failure",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "message": {
                                            "type": "string",
                                            "example": "internal server error"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/api/auth/login": {
            "post": {
                "tags": [
                    "Auth"
                ],
                "summary": "login user ",
                "operationId": "login",
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "email": {
                                        "type": "string",
                                        "description": "Enter email of the user for registeration",
                                        "example": "JayYadav@gmail.com"
                                    },
                                    "password": {
                                        "type": "string",
                                        "description": "Enter password for the identification",
                                        "example": "JayYadav900"
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "user login successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "token": {
                                            "type": "string",
                                            "example": "abin234nfndflsfjnfdaf"
                                        },
                                        "user": {
                                            "type": "object",
                                            "properties": {
                                                "_id": {
                                                    "type": "string",
                                                    "description": "unique id for user",
                                                    "example": "6934jtr0j993499933"
                                                },
                                                "email": {
                                                    "type": "string"
                                                },
                                                "role": {
                                                    "type": "string"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
    "/api/user/getUser": {
      "get": {
        "summary":"user profile",
        "responses": {
            "200":{
                "description":"User fetched sucessfully",
                "content": {
                    "application/json": {
                        "schema":{
                            "type": "object",
                            "properties":{
                                "id":{
                                    "type": "integer"
                                },
                                "name": {
                                    "type": "string"
                                },
                               "email": {
                                    "type": "string",
                                    "example": "hello@gmail.com"
                               },
                               "role" :{
                                    "type": "string",
                                    "enum": ["user", "admin", "vendor"]
                               },
                               "dateOfBirth": {
                                    "type": "date"
                               }
                            }
                        }
                    }
                }
            }
        }
      }  
    }
  },
"components": {
  "securitySchemes": {
    "BearerAuth": {
      "type": "http",
      "scheme": "bearer",
      "bearerFormat": "JWT"
    }
  },
  "security": [
    {
      "BearerAuth": []
    }
  ]
}

}


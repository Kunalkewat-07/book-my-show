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
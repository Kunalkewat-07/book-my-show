const express = require("express");
const sequelize = require("./config/db");
const app = express();
require("dotenv").config();

const auth_rout = require("./routes/authRout");
const city_rout = require('./routes/cityRout');
const movie_rout = require('./routes/movieRout');
const  theater_rout = require('./routes/theaterRout')

const PORT = process.env.PORT || 3000;
console.log(process.env.PORT);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hellooo");
});

app.use("/api/user", auth_rout);
app.use('/api/admin',city_rout);

const start_server = async () => {
  try {
    await sequelize.authenticate();
    console.log("db connected");

    app.listen(PORT, () => {
      console.log(`server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("unable to connect with db", error);
  }
};

start_server();

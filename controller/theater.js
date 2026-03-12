const city = require("../models/city");
const { theater: Theaters } = require("../models/dbhelper");

exports.getTheater = async (req, res) => {
  try {
    const { theater_id } = req.params;

    const theater = await Theaters.findOne({
      where: { theater_id, isDeleted: 0 },
      attributes: { exclude: ["isDeleted", "deletedAt","updatedAt"] },
      
    });

    if (!theater) {
      res.status(404).send("Resource not found");
    } else {
      res.status(200).send(theater);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getAllTheaters = async (req, res) => {
  try {
    let pageno = parseInt(req.query.pageno) || 1;

    const limit = parseInt(req.query.limit) || 10;

    const offset = (pageno - 1) * limit;

    const theater = await Theaters.findAll({
      order: [["createdAt", "DESC"]],
      where: { isDeleted: 0 },
      limit,
      offset,
      attributes: { exclude: ["isDeleted", "deletedAt"] },
    });
    const count = await Theaters.count({ where: { isDeleted: false } });
    const totalPages = Math.ceil(count / limit);
    res.status(200).json({ theater, currentPage: pageno, totalPages });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.createTheater = async (req, res) => {
  try {
    const { name, address, opening_time, closing_time ,city_id} = req.body;
    console.log(city_id);
    if (req.user.role != "vendor" && req.user.role != "admin") {
      return res.status(401).json({ message: "you are not permitted" });
    }
    console.log(req.user);
    const existingTheater = await Theaters.findOne({
      where: { owner_id: req.user.user_id, name, address, isDeleted: 0 },
    });

    if (existingTheater) {
      res.status(201).send({ message: "Theater already exists!" });
    } else {
      let theater = await Theaters.create({
        owner_id: req.user.user_id,
        city_id : city_id,
        ...req.body,
      });
      res
        .status(200)
        .send({ message: "Theater created successfully!", theater });
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateTheater = async (req, res) => {
  try {
    const { theater_id } = req.params;
    if (req.user.role != "admin" || req.user.role != "vendor") {
      return res.status(401).json({ message: "no permission" });
    }
    let theater = await Theaters.findOne({
      where: { theater_id, isDeleted: 0 },
    });
    if (!theater) {
      res.status(404).send("Resource not found");
    } else if (
      theater.owner_id == req.user.user_id ||
      req.user.role == "admin"
    ) {
      await theater.update(req.body);
      res.status(200).send({ theater, message: "successfully updated!!!!" });
    } else {
      res.status(201).send("you are not permited");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteTheater = async (req, res) => {
  try {
    const { theater_id } = req.params;

    const theater = await Theaters.findOne({
      where: { theater_id, isDeleted: 0 },
    });
    if (!theater) {
      res.status(404).send("Resource not found");
    } else if (
      req.user.role == "admin" ||
      theater.owner_id == req.user.user_id
    ) {
      await theater.update({ isDeleted: 1 });
      res.status(200).send("theater deleted successfully!");
    } else {
      res.status(200).send("You are not Permitted!");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

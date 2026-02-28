const { Theaters } = require("../models/dbhelper");

exports.getTheater = async (req, res) => {
  try {
    const { theater_id } = req.params;

    const theater = await Theaters.findOne({
      where: { theater_id, isDeleted: 0 },
      attributes: { exclude: ["isDeleted", "deletedAt"] },
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
    const theater = await Theaters.findAll({
      where: { isDeleted: false },
      attributes: { exclude: ["isDeleted", "deletedAt"] },
    });

    if (!theater.length) {
      res.status(404).send("Theaters not presents yet!");
    } else {
      res.status(200).send(theater);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.createTheater = async (req, res) => {
  try {
    const { name, address, opening_time, closing_time } = req.body;

    const existingTheater = await Theaters.findOne({
      where: { owner_id: req.user.user_id, name, address, isDeleted: 0 },
    });

    if (!existingTheater) {
      let theater = await Theaters.create(req.body);
      res
        .status(200)
        .send({ message: "Theater created successfully!", theater });
    } else {
      res.status(201).send({ message: "Theater already exists!" });
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateTheater = async (req, res) => {
  try {
    const theater = await Theaters.findOne({
      where: { theater_id, isDeleted: 0 },
    });

    if (!theater) {
      res.status(404).send("Resource not found");
    } else {
      theater = await theater.update(req.body);
      res.status(200).send({ theater, message: "successfully updated!" });
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
    } else {
      await theater.update({ isDeleted: 1 });
      res.status(200).send("theater deleted successfully!");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const { Movies: Movie } = require("../models/dbhelper");

exports.createMovie = async (req, res) => {
  try {
    if (req.user.role != "admin")
    return  res.status(403).json({ msg: "NOT authorized !!" });

    const movie = await Movie.create(req.body);
    res.status(200).json({ msg: "movie create succesfully !!" });
  } catch (error) {
    console.log(error.message);
    return res.send(error);
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    const movie_id = req.params.mid;
    if (req.user.role != "admin")
      return res.status(403).json({ msg: "NOT authorized !!" });
    const moviee = await Movie.findOne({
      where: { movie_id, isDeleted: false },
    });

    if (!moviee) return res.status(401).json({ msg: "movie not found !!" });

    await moviee.update({ isDeleted: true, deletedAt: Date.now() });

    res.status(200).json({ msg: "movie deleted succesfully !!" });
  } catch (error) {
    res.send(error);
  }
};

exports.updateMovie = async (req, res) => {
  try {
    const movie_id = req.params.mid;
    if (req.user.role != "admin")
   return  res.status(403).json({ msg: "NOT authorized !!" });
    const moviee = await Movie.findOne({
      where: { movie_id, isDeleted: false },
    });

    if (!moviee) return res.status(401).json({ msg: "movie not found !!" });

    await moviee.update(req.body);

    res.status(200).json({ msg: "movie update succesfully !!" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getMovie = async (req, res) => {
  try {
    const movie_id = req.params.mid;
    const movie = await Movie.findOne({
      where: { movie_id, isDeleted: false },
      attributes: {
        exclude: ["isDeleted", "deletedAt", "createdAt", "updatedAt"],
      },
    });
    if (!movie) res.status(401).json({ msg: "movie not found !!" });
    res.status(200).json(movie);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error);
  }
};

exports.getallMovie = async (req, res) => {
  try {
    let pageno = parseInt(req.query.pageno) || 1;

    const limit = parseInt(req.query.limit) || 10;

    const offset = (pageno - 1) * limit;
    const movies = await Movie.findAll({
      order: [["createdAt", "DESC"]],
      limit,
      offset,
      where: { isDeleted: false },
      attributes :{
        exclude :['isDeleted','deletedAt']
      }
    });
    const count = await Movie.count({ where: { isDeleted: false } });
    const totalPages = Math.ceil(count / limit);
    return res.status(200).json({ movies, currentPage: pageno, totalPages });
  } catch (error) {
    console.log(error.message);
    res.send(error);
  }
};

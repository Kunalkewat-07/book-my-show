const { where } = require("sequelize");
const { city:Cities } = require("../models/dbhelper");
const theater = require("../models/theater");

exports.add_City = async (req, res) => {
  try {
    console.log("hii");
    if (req.user.role != "admin")
      return res.status(404).json({ message: "UnAuthorized " });
    console.log(req.body);
    const city = await Cities.create(req.body);
    res.status(200).json({ message: "added successfully" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.getAll_City = async (req, res) => {
  try {
     let pageno = parseInt(req.query.pageno) || 1;

        const limit = parseInt(req.query.limit) ||5;

        const offset = (pageno - 1) * limit;
    const city = await Cities.findAll({
      order: [['createdAt','DESC']],
      where: { isDeleted: false },
      limit,
      offset,
      raw: true,
      attributes: { exclude: ["isDeleted", "deletedAt","updatedAt"],
       },
    });
    if (city.length == 0) {
      return res.status(404).json({ message: "city not found" });
    }
    const count = await Cities.count({where:{isDeleted: false}});
    const total_page = Math.ceil(count/limit);
    res.status(200).json({city,currentPage: pageno, totalPages : total_page});
  } catch (error) {
    res.status(500).json(error.message);
  }
};

/* exports.delete_city = async(req, res)=>{
    try {
        const {id} = req.params;
        const city = await Cities.findByPk({where:{city_id:id}});
          if(!city){
            return res.status(404).json({message: "city not found"});
        }
         await city.update({isDeleted: true})
          res.status(200).json({message: 'city delted succesfully'})
    } catch (error) {
      res.status(500).json(error.message)   
    }
}


 */

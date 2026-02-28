const { where } = require("sequelize");
const Cities = require("../models/dbhelper")

exports.add_City =  async(req, res)=>{
 try {
    if(req.user.role != 'admin') return res.status(404).json({message: 'UnAuthorized '})
    const {name, state,country} = req.body;
    const city = await Cities.create({
        name,
        city,
        country
    })
    res.status(200).json({message: 'added successfully'})
 } catch (error) {
    res.status(500).json(error.message)
 }
}

exports.getAll_City = async(req, res)=>{
    try {
        const city = await Cities.findAll({where:{isDeleted: false},attributs:{exclude:['isDeleted','deletedAt','updatedAt']}})
        if(city.length==0){
            return res.status(404).json({message: "city not found"});
        }
        res.status(200).json(city);
    } catch (error) {
        res.status(500).json(error.message)
    }
}


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
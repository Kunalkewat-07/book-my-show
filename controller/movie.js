const { movie: Movie } = require("../models/dbhelper");

exports.createMovie = async (req, res) => {
try {
      if (req.user.role != "admin")
   return  res.status(403).json({ msg: "NOT authorized !!!!" });
console.log("helloooooooooo");
console.log(req.body)
  const movie = await Movie.create(req.body);
  console.log("bhaiiiiiiiiiii")
  res.status(200).json({ msg: "movie create succesfully !!" });
} catch (error) {
      return res.status(500).send(error.message)             
}
};


exports.deleteMovie = async (req, res) => {
    try {
        
    const movie_id=req.params.mid;
  if (req.user.role != "admin")
    return res.status(403).json({ msg: "NOT authorized !!" });
     const moviee=await Movie.findOne({where:{movie_id,isDeleted:false}})

    if(!moviee) return res.status(401).json({msg:"movie not found !!"})

    await moviee.update({isDeleted:true,deletedAt:Date.now()});

    //*************yaha par junction table me se movie hatan padegi **** */
  res.status(200).json({ msg: "delete succesfully !!" });
    } catch (error) {
            return res.status(500).send(error.message)             

    }
};


exports.updateMovie = async (req, res) => {
   try {
     const movie_id=req.params.mid;
  if (req.user.role != "admin")
    return res.status(403).json({ msg: "NOT authorized !!" });
     const moviee=await Movie.findOne({where:{movie_id,isDeleted:false}})

    if(!moviee) return res.status(401).json({msg:"movie not found !!"})

    await moviee.update(req.body);

  res.status(200).json({ msg: "movie update succesfully !!" });
   } catch (error) {
         return res.status(500).send(error.message)             

   }
};


exports.getMovie=async (req,res)=>{
  try {
      const movie_id=req.params.mid;
    const movie=await Movie.findOne({where:{movie_id,isDeleted:false},attributes:{exclude:['isDeleted','deletedAt','createdAt','updatedAt']}});
  
    if(!movie) res.status(401).json({msg:"movie not found !!"})
        res.status(200).json(movie)
  } catch (error) {
    res.status(500).send(error.message)
    
  }
}

exports.getallMovie = async (req, res) => {
try {
      let pageno = parseInt(req.query.pageno) || 1;

  const limit = parseInt(req.query.limit) || 10;

  const offset = (pageno - 1) * limit;
  const movies=await Movie.findAll({where:{isDeleted:false},order:[['createdAt','DESC']],attributes:{exclude:['isDeleted','deletedAt','createdAt','updatedAt']},limit,offset})
  const count=await Movie.count({where:{isDeleted:false}});
  const totalPages=Math.ceil(count/limit);
  return res.status(200).json({movies,currentPage:pageno,totalPages})
} catch (error) {
    res.send(error.message)
}
};

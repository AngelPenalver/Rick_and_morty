const { Favorite } = require("../DB_connection");
const postFav = async (req, res) => {
  try {
    const { id, name, origin, status, image, species, gender } = req.body;
    // console.log(id);
    if (!name || !origin || !status || !image || !species || !gender)
      return res.status(401).send("Faltan datos");
  
    const [data, created] = await Favorite.findOrCreate({
      where: { name },
      defaults: { id, name, origin, status, image, species, gender },
    });
console.log(data) 
      
      const favorites = await Favorite.findAll();
      console.log(favorites)
     res.status(200).json(favorites);
     
    
    
    res.status
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports =  postFav ;

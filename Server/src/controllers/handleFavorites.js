let myFavorites = [];
function postFav(req, res) {
  const favorite = req.body;
  myFavorites.push(favorite);
  res.json(myFavorites);
}
function deleteFav(req, res) {
  const { id } = req.params;
  myFavorites = myFavorites.filter((favorite) => favorite.id !== id);
  res.json(myFavorites);
}
module.exports = {
  postFav,
  deleteFav,
};

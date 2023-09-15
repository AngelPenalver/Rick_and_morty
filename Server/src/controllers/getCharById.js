const axios = require("axios");
const url = "https://rickandmortyapi.com/api/character/";
async function getCharById(req, res) {
  try {
    const { id } = req.params;
    const { data } = await axios(url + id);
    const { status, name, species, origin, image, gender, location } = data;
    res.status(200).json({ id, status, name, species, origin, image, gender, location });
    if (!data) res.status(400).send("Not fount");
  } catch (error) {
    res.status(500).json(error.message);
  }
}
module.exports = {
  getCharById,
};
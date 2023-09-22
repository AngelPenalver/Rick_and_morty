const { getCharById } = require("../controllers/getCharById");
const login = require("../controllers/login");
const {postUser } = require("../controllers/postUser");
const { deleteFav } = require("../controllers/deleteFav");
const postFav = require("../controllers/postFav");
const { Router } = require("express");

const router = Router();


router.get("/login", login);
router.post("/login", postUser);
router.get("/character/:id", getCharById);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = { router };

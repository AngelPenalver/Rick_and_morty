const { User}  = require('../DB_connection');

async function login(req, res) {
  try {
    const { email, password } = req.query;
    console.log(User);
    if (!email || !password) {
      return res.status(400).send('Faltan datos');
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).send('Usuario no encontrado');
    }

    if (user.password !== password) {
      return res.status(403).send('Contraseña incorrecta');
    }

    return res.send({ access: true });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = login;

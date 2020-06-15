const express = require("express");
const router = express.Router();

console.log('Estoy en la carpeta routes canchas');

router.get("/canchas", (req, res) => {
  res.send("Canchas de la base de datos");
});

module.exports = router;

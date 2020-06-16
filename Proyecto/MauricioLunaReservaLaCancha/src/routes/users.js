const express = require("express");
const router = express.Router();

console.log("Estoy en la carpeta routes user");

router.get("/user/singin", (req, res) => {
  console.log("router Ingresando a la aplicacion");
  // res.send("Ingresando a la aplicacion");
  res.render("users/singin");
});

router.get("/user/singup", (req, res) => {
  console.log("router Formulario de autenticacion");
  // res.send("Formulario de autenticacion");
  res.render("users/singup");
});
module.exports = router;

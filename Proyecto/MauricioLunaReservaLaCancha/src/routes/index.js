const express = require("express");
const router = express.Router();

console.log('Estoy en la carpeta routes index');

router.get("/", (req, res) => {
  //res.send("Index");
  //renderiza el handlebar index
  res.render("index");
});

router.get("/about", (req, res) => {
  //res.send("About");
  //renderiza el handlebar about
  res.render("about");
});

module.exports = router;

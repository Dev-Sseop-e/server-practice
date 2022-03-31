//app!!
module.exports = (app) => {
  const formController = require("../controllers/formController.js");
  var router = require("express").Router();

  router.get("/:id", formController.get);
  router.post("/create", (req, res) => formController.create(req,res))
  router.post("/res/submit", (req, res) => formController.resCreate(req,res))
  router.get("/result/:id", formController.getResult)
  app.use('/api/form', router);

  //localhost:8000/api/form/create
};

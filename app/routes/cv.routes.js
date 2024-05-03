module.exports = app => {
  const cv = require("../controllers/cv.controller.js");

  var router = require("express").Router();

  router.get("/search", cv.findByKeyword);

  app.use("/api/cv", router);
};

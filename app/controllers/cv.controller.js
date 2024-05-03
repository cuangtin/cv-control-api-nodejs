const db = require("../models");
const cvModel = db.cv;

exports.findByKeyword = (req, res) => {
  cvModel.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred."
      });
    });
};

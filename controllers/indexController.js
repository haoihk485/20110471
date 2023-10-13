const mygroup = require('../models/mygroup');

const getAllStudents = (req, res) => {
  res.json(mygroup);
};

module.exports = { getAllStudents };

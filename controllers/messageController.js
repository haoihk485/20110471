const mygroup = require('../models/mygroup');
const log = require('../utils/log');

const getStudentsForMessage = (req, res) => {
  const { id } = req.params;
  console.log(req.params);

  log('GET', req.url);

  if (id) {
    const student = mygroup.find(student => student.id === id);
    if (student) {
      res.send(`<html><body><ul><li>${student.name}</li></ul></body></html>`);
    } else {
      res.send({ error: 'not valid' });
    }
  } else {
    const studentList = mygroup.map(student => student.name);
    res.send(`<html><body><ul>${studentList.map(name => `<li>${name}</li>`).join('')}</ul></body></html>`);
  }
};

module.exports = { getStudentsForMessage };

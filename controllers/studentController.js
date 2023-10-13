const mygroup = require('../models/mygroup');
const log = require('../utils/log');

const addStudent = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  log('POST', req.url);

  if (!id || !name || mygroup.some(student => student.id === id)) {
    res.send('Not valid');
    return;
  }

  mygroup.push({ id: id, name });
  res.json(mygroup);
};

const getStudent = (req, res) => {
  const { id } = req.params;

  log('GET', req.url);

  const student = mygroup.find(student => student.id === id);
  if (student) {
    res.json(student);
  } else {
    res.json({ error: 'not valid' });
  }
};

module.exports = { addStudent, getStudent };

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const log = require('./utils/log');

app.use(bodyParser.json());

// Sử dụng các route tương ứng
app.use('/', require('./routes/indexRoute'));
app.use('/20110471', require('./routes/studentRoute'));
app.use('/message', require('./routes/messageRoute'));

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

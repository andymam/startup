const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());

app.use(express.static('public'));

const apiRouter = require('./routes/apiRouter');
app.use('/api', apiRouter);

app.use((_req, res) => {
  res.sendFile('./public/main.html', { root: '.' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

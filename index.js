const express = require('express');

const app = express();
const port = 4000;



app.use(express.static('public'));

var apiRouter = require('./apiRouter');
app.use('/api', apiRouter);

app.use((_req, res) => {
  res.sendFile('./public/main.html', { root: '.' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

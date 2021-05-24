const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();

app.use('/', serveStatic(path.json(__dirname, '/dist')));

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`listening on ${port}`);
}).on('error', (err) => {
  console.log(err);
});

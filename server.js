  const express = require('express');
  const cors = require('cors');
  const bodyparser = require('body-parser');

const app = express();
const path = require('path')
app.use('/', express.static(__dirname + "/dist/dummy"));
app.get('/*', (req,res) => {
  res.sendFile(path.join(__dirname,'/dist/dummy/index.html'))
})

app.listen(6500)

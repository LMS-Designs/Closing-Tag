// module imports
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const db = mongoose.connection;
const app = express();
// Development mode port
const port = process.env.PORT || 5000;
app.listen(port)

// app middleware
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://nodelogin:lickmystack1@ds219191.mlab.com:19191/closing-tag', function(err) {
  if (err) {
    console.err(err);
  } else {
    console.log('Connected');
  }
});

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('DB connected!');
});
mongoose.set('bufferCommands', false);
mongoose.set('debug', true);

app.get('/test', (req, res) => {
  res.json([
    {id:1, name: "this"},
    {id:2, name: "is"},
    {id:3, name: "a"},
    {id:4, name: "test"}
  ]);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

module.exports = app;
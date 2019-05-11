// module imports
const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const morgan = require('morgan');
const app = express();
const Sequelize = require('sequelize');
const sequelize = new Sequelize('ClosingTag', 'webconnection', '@Closingtagisdabomb101', {
    host: 'closing-tag.cypm94q3l3td.us-east-2.rds.amazonaws.com',
    dialect: 'mysql' 
  });
sequelize.authenticate()
  .then(() => {
    console.log('Database Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Development mode port
const port = process.env.PORT || 5000;
app.listen(port)

// app middleware
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(passport.initialize());
app.use(passport.session());
app.use(session({
  secret: 'closingtagfools',
  resave: false,
  saveUninitialized: true
}));

//routes.gohere

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
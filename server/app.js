
const express = require('express')
const path = require('path')
const cors = require('cors')
const volleyball = require('volleyball')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// static middleware
app.use(express.static(path.join(__dirname, '..','public')))


app.use(cors())
app.use(volleyball) 

//send index.html for any other requests
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

//error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
});

module.exports = app;


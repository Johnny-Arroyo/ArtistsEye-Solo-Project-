const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

//connect to MongoDB
mongoose.connect('mongodb+srv://jta2:VaporKeys2020@soloproject.suuycvl.mongodb.net/?retryWrites=true&w=majority');

//check for connection errors
mongoose.connection.on('error', (error) => {
  console.error('MongoDB connection error', error);
});

app.use(express.static(path.join(__dirname, 'dist')));


app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html').status(200).sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.get('/myportfolio', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/pages/myportfolio.js'))
});

// app.post('/myportfolio', (req, res) => {
//   res.status(200)
// })

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
app.get('/test', (req, res) => {
  res.json({ message: 'API test successful' });
});


const express = require('express');
const app = express();
const path = require('path');
const { v4 } = require('uuid');

const cors = require('cors');
app.use(cors());

const PORT = process.env.PORT || 3000;

const COMMENTS = [
  {id: v4(), name: "Alex", text: "Hello everyone"},
];

app.use(express.json());

app.get('/api/comments', (req, res) => {
  res.status(200).json(COMMENTS);
});

app.post('/api/comments', (req, res) => {
  const comment = {id: v4(), ...req.body};

  COMMENTS.unshift(comment);
  res.status(201).json(comment);
});

app.use(express.static(path.resolve(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(PORT);
 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();  // Per usare variabili d'ambiente

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());  // Per parsare i JSON nel corpo delle richieste

// Connessione a MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Rotte di esempio
app.get('/', (req, res) => {
  res.send('Hello, Rentify backend!');
});

// Avvio server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
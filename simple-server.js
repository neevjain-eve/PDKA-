const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static('armbonanza/public'));
app.use(express.static('armbonanza/dist'));
app.use(express.static('armbonanza/src')); // fallback

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'armbonanza/public/index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🌐 Server running on http://localhost:${PORT}`);
  console.log(`📱 All devices: Find your IP with "ipconfig" and use http://YOUR-IP:${PORT}`);
});

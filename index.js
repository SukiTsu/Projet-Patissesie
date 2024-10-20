const express = require('express');
const path = require('path');
const app = express();

// Serve les fichiers statiques du répertoire build
app.use(express.static(path.join(__dirname, 'build')));

// Redirige toutes les requêtes vers index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

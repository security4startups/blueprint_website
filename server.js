const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'public')));

// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

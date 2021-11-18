const express = require('express');
const app = express();

// Serve all content from the build folder
app.use(express.static(__dirname + '/build'));


// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/build/index.html');
});

console.clear();
app.listen(4596, () => console.log('Server started on port 4596'));
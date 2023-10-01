const express = require('express');
const app = express();
const port = 3000;

app.use('/assets', express.static('assets')); // Connecting CSS File With HTML File..!!!

app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//   res.send('Hello, Welcome to the Express starter template for Stackblitz!');
// });
app.get('/', (req, res) => {
  res.render('coffee');
});

app.listen(port, () => {
  console.log(`App is live at http://localhost:${port}`);
});

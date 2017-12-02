const express = require('express');

// We create a server named "app"
// Express server handling requests and responses
const app = express();

// Tell our server to serve static files from the public directory
app.use(express.static('public'));

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});

// ----- Routes -----

// Our first route
app.get('/', (req, res, next) => {
  // console.log(request);
  res.render('index');
})

// Starter code for "index.ejs"

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <title>My First View</title>
//   <link rel="stylesheet" href="stylesheet/style.css">
// </head>
// <body>
//   <h1>Ironhacker Be Like</h1>
//   <img src="https://media.giphy.com/media/l0MYEqEzwMWFCg8rm/giphy.gif">
// </body>
// </html>


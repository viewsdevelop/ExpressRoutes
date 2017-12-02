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

app.set('views', __dirname + '/views');

// ----- Routes -----

// Our first route
app.get('/', (request, response, next) => {
  console.log(request);
  response.send('<p>Welcome Ironhacker. :)</p>');
})

// Our second route incorporating CSS
app.get('/hello', (request, response, next) => {
  response.send(`
    <!doctype html>
    <html>
      <head>
        <link rel="stylesheet" href="stylesheets/style.css">
      </head>
      <body>
        This is my second route.
      </body>
    </html>
  `);
});

// Save for 'index.ejs' file

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

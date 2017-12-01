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

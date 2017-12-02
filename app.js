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

<<<<<<< Updated upstream
=======
app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

>>>>>>> Stashed changes
// ----- Routes -----

// Our first route
app.get('/', (req, res, next) => {
  // console.log(request);
  res.render('index');
})

// Our second route incorporating CSS
// app.get('/hello', (request, response, next) => {
//   response.send(`
//     <!doctype html>
//     <html>
//       <head>
//         <link rel="stylesheet" href="stylesheets/style.css">
//       </head>
//       <body>
//         This is my second route.
//       </body>
//     </html>
//   `);
// });

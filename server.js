//Install express server
const express = require('express');
const app = express();
// var cors = require('cors')

// app.use(cors()) 
// Serve only the static files form the dist directory
// app.options('/', cors());

app.use(function(req, res, next){
  if (req.hostname != 'localhost' && req.get('X-Forwarded-Proto') == 'http') {
    res.redirect(`https://${req.hostname}${req.url}`);
    return;
  }
 
  // app.router(req, res, next);
  next();
 });
app.use(express.static(__dirname + '/dist'));


// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4000);

console.log("listening on 4000 ");
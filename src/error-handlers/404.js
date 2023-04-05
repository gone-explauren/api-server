'use strict'

// error handler -> four is the magic number of parameters!!
function error404(err, req, res, next) {
  console.log(err);
  res.status(404).send("Sorry, what you're lookng for does not exist.");
};

module.exports = error404;
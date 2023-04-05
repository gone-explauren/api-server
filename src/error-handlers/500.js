'use strict'

function error500(err, req, res, next) {
  console.log("Server error: ", err);
  res.status(500).send('Server error.');
};

module.exports = error500;
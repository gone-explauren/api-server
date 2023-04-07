'use strict'

function logger(req, res, next) {
	console.log('Incoming request: ', req.method, req.path, req.body);
	next();
}

module.exports = logger;
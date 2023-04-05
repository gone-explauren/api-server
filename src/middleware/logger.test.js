'use strict';
// unit test

const logger = require('./logger.js');

describe('Testing the logger', () => {
	test('Should log req.method and req.path then pass to the next middleware', () => {
		const req = {method: "test", path: "test"};
    const res = {};
    const next = jest.fn();
		logger(req, res, next)

		expect(next).toHaveBeenCalled();
	})
})
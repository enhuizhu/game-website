"use strict";

module.exports = {
	getBaseUrl: function(req) {
		return req.protocol + '://' + req.get('host')
	}
}

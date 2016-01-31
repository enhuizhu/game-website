"use strict";

module.exports = {
	buildResponse: function(success, msg) {
		return {
			success: success,
			msg: msg
		}
	}
}

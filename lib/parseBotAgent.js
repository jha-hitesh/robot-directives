"use strict";
var isBot = require("isbot");
// var userAgentLib = require("useragent");
const UAParser = require("ua-parser-js");


const parseBotAgent = userAgent =>
{
	if (userAgent != null)
	{
		// userAgent = userAgentLib.parse(userAgent).family.toLowerCase();
		userAgent = UAParser(userAgent).browser.name

		if (userAgent!==undefined && isBot(userAgent.toLowerCase()))
		{
			return userAgent.toLowerCase();
		}
	}

	return "robots";
};



module.exports = parseBotAgent;

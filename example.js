var Discordbot = require('node-discord');
var bot = new Discordbot({
	username: "",
	password: "",
	chats: ["66192955777486848"],
	autorun: true
});

bot.on("err", function(error) {
	console.log(error)
});

bot.on("ready", function(rawEvent) {
	console.log("Connected!");
	console.log("Logged in as: ");
	console.log(bot.username);
	console.log(bot.id);
	console.log("----------");
});

bot.on("message", function(user, userID, channelID, message, rawEvent) {
	console.log(user + " - " + userID);
	console.log("in " + channelID);
	console.log(message);
	console.log("----------");
});

bot.on("presence", function(user, userID, status, rawEvent) {
	/*console.log(user + " is now: " + status);*/
});

/*bot.on("debug", function(rawEvent) {
	console.log(rawEvent) //Logs every event
})*/

bot.on("disconnected", function() {
	console.log("Bot disconnected");
	/*bot.connect()*/ //Auto reconnect
});
var mongoose = require("mongoose");

var ArticlesSchema = new mongoose.Schema({
	title: {
		type: String, 
	},
	link: {
		type: String, 
	},	
	imgLink: {
		type: String, 
	},
	manufacturer: {
		type: String, 
	},
	msrp: {
		type: String, 
	},
	
	createdAt: {
		type: Date, 
		default: Date.now
	}
});

var Articles = mongoose.model("Articles", ArticlesSchema);

module.exports = Articles;
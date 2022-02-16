var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const modelSchema = new Schema({
	firstName: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
	},
	lastName: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
	},
	picture: {
		type: String,
		required: true,
		trim: true,
	},
	gender: {
		type: String,
		required: true,
		trim: true,
	},
	dateOfBirth: {
		type: String,
		required: true,
		trim: true,
	},
	profession: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
	},
	shoeSize: {
		type: String,
		required: true,
		trim: true,
	},
	hairColor: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
	},
	hairLength: {
		type: String,
		required: true,
		trim: true,
	},
	braSize: {
		type: String,
		required: true,
		trim: true,
	},
	waistSize: {
		type: String,
		required: true,
		trim: true,
	},
	height: {
		type: String,
		required: true,
		trim: true,
	},
	weight: {
		type: String,
		required: true,
		trim: true,
	},
	casting: {
		type: String,
		required: true,
		trim: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

let Model = mongoose.model('Model', modelSchema);

module.exports = Model;
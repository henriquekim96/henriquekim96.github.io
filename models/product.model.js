let mongoose = require('mongoose'),
	ProductSchema = new mongoose.Schema({
		nome: {type: String, required: true, max: 100},
		preco: {type: Number, required: true},
		ID: {type: String, required: true, max: 100}
	});

module.exports = mongoose.model('Product',
								 ProductSchema);
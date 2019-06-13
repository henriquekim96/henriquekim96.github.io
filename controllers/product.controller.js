let Product = require('../models/product.model');
exports.test = (req, res) =>{
	res.send('Greetings from the Test controller');
};
//CREATE
exports.create = (req, res) => {
    let product = new Product(
        {
            nome: req.body.nome,
            preco: req.body.preco,
            ID: req.body.ID
        }
    );

    product.save((err) => {
        if (err) {
            return next(err);
        }
       res.redirect('/');
    })
};

//READ
exports.product_details = (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if (err) return next(err);
        res.send(product);
    })
};
//UPDATE
exports.update = (req, res) => {
	Product.findByIdAndUpdate(req.params.id, {$set: req.body},
	(err, product) =>{
		if(err) return next(err);
		res.redirect('/');
	});
};

//DELETE
exports.delete = (req, res) => {
	Product.findByIdAndRemove(req.params.id, (err) => {
		if(err) return next(err);
		res.redirect('/');
	})
}

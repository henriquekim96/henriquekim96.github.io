let Product = require('../models/product.model');


//criar
exports.create = (req, res) => {

    let product = new Product(
        {
            modelo: req.body.modelo,
            preco: req.body.preco,
            ID: req.body.ID
        }
    );
    console.log('Sucesso', product);
    product.save((err) => {
        if (err) {
            next(err);

            
        }
        else{
            res.send(product);
        }
    })
};

//ler
exports.product_details = (req, res) => {
    Product.find((err, product) => {
        if (err) return next(err);
        res.send(product);
    })
};
//deletar
exports.delete = (req, res) => {
    Product.findByIdAndRemove(req.params.id, (err) => {
        if(err) return next(err);
        res.redirect('/');
    })
}



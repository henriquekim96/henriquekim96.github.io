let express =  require('express'),
	router = express.Router(),
	controller = 
	require('../controllers/product.controller'),
	UserDao = require('../models/product.model.js');

router.get('', (req, res) => {
	UserDao.find().then((users) => {
		res.render('index', { users: users});
	})
	
});
router.get('/test', controller.test);
router.post('/create', controller.create);
//router.get(':id', product_controller.product_details);
router.put('/update/:id', controller.update);
router.delete('/delete/:id', controller.delete);

module.exports = router;


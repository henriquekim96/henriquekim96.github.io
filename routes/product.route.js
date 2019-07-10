let express =  require('express'),
	controller = require('../controllers/product.controller'),
	UserDao = require('../models/product.model.js'),
	router = express.Router();

router.get('/', (req, res) => {
	UserDao.find().then((users) => {
		res.render('index', { users: users});
	})
});


router.post('/create', controller.create);
router.get('/read/', controller.product_details);
router.post('/delete/:id', controller.delete);


module.exports = router;


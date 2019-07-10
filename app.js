let express = require('express'),
	bodyParser = require('body-parser'),
	http = require('http'),
	product = require('./routes/product.route'), // Imports routes for the products
	path = require('path'),
	publicDir = require('path').join(__dirname,'/public'),
	uploads = require('path').join(__dirname, '/uploads'),
	estatico = require('path').join(__dirname, '/estatico'),
	app = express(),

// Set up mongoose connection
	dev_db_url = 
	'mongodb+srv://Admin:123456aaa@db-8wqvt.mongodb.net/test?retryWrites=true',
	mongoose = require('mongoose').connect(dev_db_url, {useNewUrlParser:true});
	mongoDB = process.env.MONGODB_URI || 
				dev_db_url;

//mongoose.Promise = global.Promise;
//const db = mongoose.connection;
//db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//app.set('index', path.join(__dirname, 'index'));

app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', product);
app.use(express.static(publicDir));
app.use(express.static(estatico));
app.use('/uploads',express.static(uploads));

let port = 1234;

http.createServer(app).listen(process.env.PORT || port, () => {
    console.log('Server is up and running on port numner ' + port);
});
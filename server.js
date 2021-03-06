const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const dbConnection = require('./database') 
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080
// Route requires


// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize())

app.use(passport.session()) // calls the deserializeUser


app.use( (req, res, next) => {
	console.log('req.session', req.session);

	return next();
});

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'))
}

app.use((req, res) => {
	res.sendFile(path.join(__dirname, "/client/public/"));
});

// Routes
app.use('/', require('./routes/user'))





// Starting Server 
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})


// app.get('*', (req, res) => {
// 	res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
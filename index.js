const express = require('express')
const userRoute = require('./router/users')
const app = express()


const bodyParser = require('body-parser')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// midleware
var myLogger = function (request, request, next){
	request.time = new Date()
	next()
}
app.use(myLogger)

// CSS
app.use('/assets',express.static('public'))
// EJS
app.set('view engine', 'ejs')

// HOHEM
app.get('/', function(request, response){
	const kelas = {
		id: 1,
		nama: 'javascript',
		date: request.time
	}
	response.render('pages/index', {kelas:kelas})
})


// ABOUTE
app.get('/about', function(request, response){
	response.render('pages/about')
})

app.use(userRoute)

app.listen(3000, function(){
	console.log('server is ok')
})
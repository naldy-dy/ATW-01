const { v4: uuidv4 } = require('uuid')
let users = [
	{id: 1, name: 'sunardi', email: 'sunardi@gmail.com'},
	{id: 2, name: 'naldy', email: 'naldy@gmail.com'},
]

module.exports ={
	index: (function(request, response){
		response.render('pages/user/index', {users:users})
	}),


	store: (function(request, response){
		users.push({
			id: uuidv4(),
			name: request.body.name,
			email: request.body.email,
		})
		response.redirect('/users')
}),
	show: (function(request, response){
		const id = request.params.id
		const data = users.filter(user =>{
			return user.id == id
		})

		response.render('pages/user/show')
	}),

	update: (function(request, response){
	const id = request.params.id
	users.filter(user=>{
		if(user.id == id){
			user.id = id
			user.name = request.body.name
			user.email = request.body.email
		}
	})
	response.json({
		status: true,
		data: users,
		message: 'Data Berhasil Diedit',
		method: request.method,
		url: request.url
	})
}),

	delete: (function(request, response){
	let id = request.params.userId
	users = users.filter(user => user.id != id)
	response.send({
		status: true,
		data: users,
		message: 'Data Berhasil Dihapus',
		method: request.method,
		url: request.url
	})
})
}
const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/Server-Config');
const apiRoutes = require('./routes/index');
const UserRepository = require('./repository/User-repository');
const UserService = require('./services/user-service');

// app is created 
const app = express();


const StartServer = ()=> {

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true}));

	app.use('/api', apiRoutes);
	
	app.listen(PORT, async ()=> {
		console.log('Server is started on :',PORT);
		// const user = new UserRepository();
		// const response = await user.getById(5);
		// console.log(response);
		const user = new UserService();
		// const token = user.createToken({email: "vivekkumar@gmail.com", id: 1});
		// console.log("this is new token",token);
		// const newtoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpdmVra3VtYXJAZ21haWwuY29tIiwiaWQiOjEsImlhdCI6MTY5OTk2ODkyOCwiZXhwIjoxNjk5OTcyNTI4fQ.TzsPZzJKIaORDbfdVW-lAVO4SrYCFNifclUrnaZ9I2M';
		// const valid = user.verifyToken(newtoken);
		// console.log(valid);
	})
}

StartServer();
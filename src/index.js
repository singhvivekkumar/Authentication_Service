const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/Server-Config');
const apiRoutes = require('./routes/index');
const db = require('./models/index');

// app is created 
const app = express();


const StartServer = ()=> {

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true}));

	app.get('/auth/home', (req, res)=> {
		console.log(req.body);
		return res.status(200).json({
			message: "everything is good"
		})
	});
	app.use('/auth/api', apiRoutes);
	app.use('/api', apiRoutes);
	
	app.listen(PORT, async ()=> {
		console.log('Server is started on :',PORT);
		// sync db
		// db.sequelize.sync({ alter: true});
		
		// const user1 = await User.findByPk(2);
		// const role1 = await Role.findByPk(1);

		// adding role for user 
		// user1.addRole(role1);

		// magic methods
		// const response = await role1.hasUser(user1);
		// console.log(response);
		
	})
}

StartServer();
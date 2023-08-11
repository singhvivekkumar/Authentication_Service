const express = require('express');
const { PORT } = require('./config/Server-Config');

// app is created 
const app = express();


const StartServer = ()=> {
	
	app.listen(process.env.PORT, ()=> {
		console.log('Server is started on :process.env.PORT')
	})
}

StartServer();
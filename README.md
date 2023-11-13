# Authentication Service
- Identify every user

## JWT authenticaion service
	- 


## Setup database or sequelize orm
	-Install or and setup the mysql db connection by configuration of config file
	```npn i sequelize```

	-in config.js file
	```
		"username": "root",
    	"password": "<password>",
    	"database": "<database_name>",
	```

	-create migration and model files for database by running ORM command
	`npx sequelize model:generate --name <table_name> --attributes emails:string,password:string`

	-now migrate the and sync with database by this command 
	`nox sequelize `

### Encrypt the password
	-Storing raw password or as plain text is not recommended at all
	-so we should to use encrypt the password for that we use "bcrypt".
	`npm i bcrypt`
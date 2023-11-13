# Authentication Service
- Identify every user

## JWT authenticaion service
	- 


## Setup database or sequelize orm
	-Install or and setup the mysql db connection by configuration of config file
	```npn i sequelize```

	-In config.js file
	```
		"username": "root",
    	"password": "<password>",
    	"database": "<database_name>",
	```

	-Create migration and model files for database by running ORM command
	`npx sequelize model:generate --name <table_name> --attributes emails:string,password:string`

	-Now migrate the and sync with database by this command 
	`nox sequelize `

### Encrypt the password
	-Storing raw password or as plain text is not recommended at all
	-So we should to use encrypt the password for that we use "bcrypt".
	`npm i bcrypt` 
	-Process has written there :- https://www.npmjs.com/package/bcrypt


	-Best place to encrypt password in model because database gives us something called triggeres which help to execute some set of statement in before or after an event in database.
	-In sequelize, there are many function https://sequelize.org/docs/v6/other-topics/hooks/
## Hosted Project

[User-Resource API Render URL](https://e-commerce-api-10.herokuapp.com/)

#### Setup Basic Express Server

- [] import express and assign to variable
- [] setup start port variable (5000) and start function

#### Connect To DB

- [] get connection string
- [] setup .env with MONGO_URL variable and assign the value
- [] import 'dotenv' and setup package
- [] import connect() and invoke in the starter
- [] restart the server
- [] mongoose V6 info

#### Basic Routes and Middleware

- [] setup / GET Route
- [] setup express.json() middleware
- [] setup 404 and errorHandler middleware
- [] import 'exress-async-errors' package


#### User Model

- [] create model folder and User.js file
- [] create schema with name ( type:String)
- [] export mongoose model


#### Test Routes in Postman

#### Register Controller

- [] create user
- [] send response with entire user (only while testing)


#### Create Docs

- [] [Docgen Library] (https://github.com/thedevsaddam/docgen)
- [] Export Postman Collection
- [] docgen build -i fileName.json -o index.html
- [] create index.html in public


#### Deploy on Heroku

- [] Create Render account
- [] remove/copy from the main repo
- [] add dev command "nodemon app.js"
- [] change start to "node app.js"
- [] setup node version in package.json
- [] "engines": {"node": "14.x"}
- [] Procfile "web: node app.js"
- [] git init
- [] git add .
- [] git commit -m "initial commit"
- [] git push render master/main
- [] render login
- [] connect git repo to render
- [] setup env vars


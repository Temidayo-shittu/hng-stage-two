#### Postman Collection Link

- https://elements.getpostman.com/redirect?entityId=26636754-aab25820-f498-4104-bab1-4887f8799b8d&entityType=collection

- The postman documentation shows a standard format for requests for each endpoint
- It also shows the sample usage of the API, including example requests and expected responses

#### Deploy on Cyclic

- Create Cyclic account
- add dev command "nodemon app.js"
- change start to "node app.js"
- setup node version in package.json
- "engines": {"node": "14.x"}
- git init
- git add .
- git commit -m "initial commit"
- git pus master/main
- cyclic login
- connect git repo to cyclic
- setup env vars
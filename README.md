# nxt-mock-server

## How to run mock server?
Run the following command
```
node server.js
```
It will start the mock server on port 3000.
To update the mock data make changes in the `data.js` file.

## How to run API server?
Run the following command
```
node api.js
```
It will start the API server on port 3001.
If you want to update the OpenAPI definition then please update/replace the
appropriate file(s) under the `open-api` folder.

To view the API call the appropirate end points:
- http://localhost:3001/auth-api
- http://localhost:3001/staff-app
- http://localhost:3001/user-app
- http://localhost:3001/user-management-api
- http://localhost:3001/admin-app
- http://localhost:3001/kitchen-app

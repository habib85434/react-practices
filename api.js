const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const authenticationApiDocument = require('./open-api/authentication.json');
const staffAppDocument = require('./open-api/staff-app.json');
const userAppDocument = require('./open-api/user-app.json');
const userManagementApiDocument = require('./open-api/user-management.json');

const adminAppDocument = require('./open-api/admin-app.json');
const kitchenAppDocument = require('./open-api/kitchen-app.json');

app.use('/auth-api', swaggerUi.serve, swaggerUi.setup(authenticationApiDocument));
app.use('/staff-app', swaggerUi.serve, swaggerUi.setup(staffAppDocument));
app.use('/user-app', swaggerUi.serve, swaggerUi.setup(userAppDocument));
app.use('/user-management-api', swaggerUi.serve, swaggerUi.setup(userManagementApiDocument));
app.use('/admin-app', swaggerUi.serve, swaggerUi.setup(adminAppDocument));
app.use('/kitchen-app', swaggerUi.serve, swaggerUi.setup(kitchenAppDocument));

app.listen(3001, () => {
    console.log(`API documnetation Server is running`)
});
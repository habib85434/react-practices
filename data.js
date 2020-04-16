const casual = require('casual');

require('./models/company');
require('./models/branch');
require('./models/session');
require('./models/user');

const data = {
    users: [],
    companies: [],
    branches: [],
    sessions: [],
};

//generate company data
for (let index = 0; index < 50; index++) {
    let company = casual.company
    for (let index = 0; index < 3; index++) {
        let branch = casual.branch(company);
        company.branches.push(branch);
        data.branches.push(branch);
    }
    data.companies.push(company);
}

//generate user data
for (let index = 0; index < 10; index++) {
    let user = casual.user;
    for (let index = 0; index < 3; index++) {
        let session = casual.session(user);
        user.sessions.push(session);
        data.sessions.push(session);
    }
    data.users.push(user);
}

var testUser = {
    "id": 1,
    "firstName": "aperiam",
    "lastName": "velit",
    "userName": "demo",
    "password": "demo",
    "email": "Yoshiko_Conn@Vernie.us",
    "phone": "183-427-7774",
    "companyId": 66,
    "branchId": 9,
    "kitchenId": 55,
    "sessions": []
}
testUser.sessions.push({
    "token": "95ce1578-5262-4e11-98ec-84a45aee56e0",
    "expiredMinutes": 54,
    "userName": "demo",
    "password": "demo",
    "userId": 1
});

data.users.push(testUser);

module.exports = { users, sessions, companies, branches } = data;
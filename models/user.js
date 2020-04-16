const casual = require('casual');

module.exports = casual.define('user', () => {
    return {
        id: casual.integer((from = 2), (to = 100)),
        firstName: casual.word,
        lastName: casual.word,
        userName: casual.username,
        password: casual.password,
        email: casual.email,
        phone: casual.phone,
        companyId: casual.integer((from = 1), (to = 100)),
        branchId: casual.integer((from = 1), (to = 100)),
        kitchenId: casual.integer((from = 1), (to = 100)),
        sessions:[],
        is_deleted: false,
        created_id: casual.integer((from = 1), (to = 10000)),
        created_dt: casual.date((format = 'YYYY-MM-DD')),
        updated_id: casual.date((format = 'YYYY-MM-DD')),
        updated_dt: casual.date((format = 'YYYY-MM-DD')),

    };
});

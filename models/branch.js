const casual = require('casual');

module.exports = casual.define('branch', company => {
    return {
        id: casual.integer((from = 1), (to = 200)),
        name: casual.word,
        address: casual.word,
        email: casual.email,
        phone: casual.word,
        companyId: company.id,
        is_deleted: false,
        created_id: casual.integer((from = 1), (to = 10000)),
        created_dt: casual.date((format = 'YYYY-MM-DD')),
        updated_id: casual.date((format = 'YYYY-MM-DD')),
        updated_dt: casual.date((format = 'YYYY-MM-DD')),

    };
});

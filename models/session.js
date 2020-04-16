const casual = require('casual');

module.exports = casual.define('session', user => {
    return {
        token: casual.uuid,
        expiredMinutes: casual.integer((from = 10), (to = 60)),
        userName: casual.username,
        password: casual.password,
        userId: user.id
    };
});

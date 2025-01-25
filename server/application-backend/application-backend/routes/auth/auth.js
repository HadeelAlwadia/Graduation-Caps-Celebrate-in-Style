const handleLogin = require('../../functions/auth/loginHandler');
const handleRegister = require('../../functions/auth/registerHandler');


module.exports = function (app) {
    app.post('/api/auth/login', handleLogin);
    app.post('/api/auth/register', handleRegister);
}
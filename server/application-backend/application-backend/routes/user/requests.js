const authGuard = require('../../middleware/auth');
const { handleGetRequest, handleAddRequest, handleDeleteRequest } = require('../../functions/users/userRequestsHandler');
const handleUserInfo = require('../../functions/users/userInfoHandler');

module.exports = function (app) {

    app.get('/api/user/info', authGuard, handleUserInfo);
    app.get('/api/user/requests', authGuard, handleGetRequest);
    app.post('/api/user/requests', authGuard, handleAddRequest);
    app.delete('/api/user/requests/:id', authGuard, handleDeleteRequest);
}
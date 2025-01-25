const authGuard = require('../../middleware/auth');
const { handleGetRequest, handleAddRequest, handleDeleteRequest } = require('../../functions/user/userRequestsHandler');
const {handleUserInfo,handleUpdateUserInfo} = require('../../functions/user/userInfoHandler');

module.exports = function (app) {
    app.get('/api/user/info', authGuard, handleUserInfo);
    app.get('/api/user/requests', authGuard, handleGetRequest);
    app.post('/api/user/requests', authGuard, handleAddRequest);
    app.delete('/api/user/requests', authGuard, handleDeleteRequest);
    app.put('/api/user/info', authGuard, handleUpdateUserInfo);


}











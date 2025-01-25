const {  handleAddUser, handleDeleteUser, handleGetUsers } = require("../../functions/admin/users");
const { handleUpdateUserInfo } = require("../../functions/user/userInfoHandler");
const authGuard = require('../../middleware/auth');

module.exports = function (app) {
    app.get('/api/admin/users', authGuard, handleGetUsers);

    app.post('/api/admin/users', authGuard, handleAddUser);
    app.delete('/api/admin/users', authGuard, handleDeleteUser);
    app.put('/api/admin/users', authGuard, handleUpdateUserInfo)}
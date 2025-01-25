module.exports = function (app) {
    app.get('/api/admin/requests', (_, res) => res.send('todo'))
}
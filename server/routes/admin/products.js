
const { handleGetProducts, handleAddProduct, handleDeleteProduct } = require('../../functions/admin/products');
const authGuard = require('../../middleware/auth');

module.exports = function (app) {
    app.get('/api/admin/products', authGuard, handleGetProducts);
    app.post('/api/admin/products', authGuard, handleAddProduct);
    app.delete('/api/admin/products', authGuard, handleDeleteProduct);
}
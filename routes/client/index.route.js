const categoryMiddleware = require('../../middlewares/client/category.middleware')

const homeRoutes = require('./home.route');
const productsRoutes = require('./product.route');
const searchRoutes = require('./search.route');

module.exports = (app) => {
  app.use(categoryMiddleware.category);

  app.use('/', homeRoutes);

  app.use('/products', productsRoutes);

  app.use('/search', searchRoutes);
}
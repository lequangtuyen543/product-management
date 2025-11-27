const Product = require('../../models/product.model');

const productHelper = require('../../helpers/product');

// [GET]
module.exports.index = async (req, res) => {
  //Lấy ra sản phẩm nổi bật
  const productsFeatured = await Product.find({
    featured: '1',
    deleted: false,
    status: 'active'
  });

  const newProducts = productHelper.priceNewProducts(productsFeatured);
  //Lấy ra sản phẩm nổi bật

  res.render('client/pages/home/index', {
    pageTitle: 'Page Home',
    productsFeatured: newProducts
  });
};
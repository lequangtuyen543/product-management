const Product = require('../../models/product.model');

const productHelper = require('../../helpers/product');

// [GET]
module.exports.index = async (req, res) => {
  //Lấy ra sản phẩm nổi bật
  const productsFeatured = await Product.find({
    featured: '1',
    deleted: false,
    status: 'active'
  }).limit(6);

  const newProductsFeatured = productHelper.priceNewProducts(productsFeatured);
  //Hết Lấy ra sản phẩm nổi bật

  //Hiển thị danh sách sản phẩm mới nhất
  const productsNew = await Product.find({
    deleted: false,
    status: 'active'
  }).sort({ position: 'desc' }).limit(6);

  const newProductsNew = productHelper.priceNewProducts(productsNew);
  //Hết Hiển thị danh sách sản phẩm mới nhất

  res.render('client/pages/home/index', {
    pageTitle: 'Page Home',
    productsFeatured: newProductsFeatured,
    productsNew: newProductsNew
  });
};
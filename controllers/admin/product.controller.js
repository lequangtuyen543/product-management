const Product = require('../../models/product.model');

const filterStatusHelper = require('../../helpers/filterStatus');
const searchHelper = require('../../helpers/search');

module.exports.index = async (req, res) => {
  console.log(req.query.status);

  const filterStatus = filterStatusHelper(req.query);  

  let find = {
    deleted: false,
  };

  if (req.query.status) {
    find.status = req.query.status;
  }

  const objectSearch = searchHelper(req.query);
  
  // console.log(objectSearch);

  if (objectSearch.regex) {
    find.title = objectSearch.regex;
  }

  //Pagination
  let objectPagination = {
    currentPage: 1,
    limitItems: 4
  };

  if(req.query.page) {
    objectPagination.currentPage = parseInt(req.query.page);
  }

  objectPagination.skip = (objectPagination.currentPage - 1) * objectPagination.limitItems;

  const countProducts = await Product.countDocuments(find);
  const totalPages = Math.ceil(countProducts / objectPagination.limitItems);
  objectPagination.totalPages = totalPages;

  const products = await Product.find(find).limit(objectPagination.limitItems).skip(objectPagination.skip);

  // console.log(products);

  res.render('admin/pages/products/index', {
    pageTitle: 'Page Products',
    products: products,
    filterStatus: filterStatus,
    keyword: objectSearch.keyword,
    pagination: objectPagination,
  });
};
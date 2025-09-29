const Product = require('../../models/product.model');

const filterStatusHelper = require('../../helpers/filterStatus');
const searchHelper = require('../../helpers/search');
const paginationHelper = require('../../helpers/pagination');

//GET /admin/products
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
  const countProducts = await Product.countDocuments(find);

  let objectPagination = paginationHelper(
    {
      currentPage: 1,
      limitItems: 4
    },
    req.query,
    countProducts
  );
  //End Pagination


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

//PATCH /admin/products/change-status/:status/:id
module.exports.changeStatus = async (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  const status = req.params.status;

  await Product.updateOne({ _id: id }, { status: status });
  // res.redirect("back");
  res.redirect(req.get("Referer") || "/");
};

//PATCH /admin/products/change-multi
module.exports.changeMulti = async (req, res) => {
  const type = req.body.type;
  const ids = req.body.ids.split(', ');

  switch (type) {
    case 'active':
      await Product.updateMany({ _id: { $in: ids } }, { status: 'active' });
      break;
    case 'inactive':
      await Product.updateMany({ _id: { $in: ids } }, { status: 'inactive' });
      break;
    default:
      break;
  }
  res.redirect(req.get("Referer") || "/");
};

//DELETE /admin/products/delete/:id
module.exports.deleteItem = async (req, res) => {
  const id = req.params.id;

  await Product.deleteOne({ _id: id });
  // res.redirect("back");
  res.redirect(req.get("Referer") || "/");
};
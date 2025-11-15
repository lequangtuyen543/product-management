const Role = require('../../models/roles.model');

const systemConfig = require("../../config/system");

//[GET] /admin/roles
module.exports.index = async (req, res) => {
  let find = {
    deleted: false
  }

  const records = await Role.find(find);
  
  res.render('admin/pages/roles/index', {
    pageTitle: 'Page Roles',
    records: records
  });
};

//[GET] /admin/roles/create
module.exports.create = async (req, res) => {
  res.render('admin/pages/roles/create', {
    pageTitle: 'Create Roles'
  });
};

//[POST] /admin/roles/create
module.exports.createPost = async (req, res) => {
  console.log(req.body);

  const record = new Role(req.body);
  await record.save();

  res.redirect(`${systemConfig.prefixAdmin}/roles`);
};
module.exports.dashboard = (req, res) => {
  res.render('admin/pages/dashboard/index', {
    pageTitle: 'Page Dashboard'
  });
};
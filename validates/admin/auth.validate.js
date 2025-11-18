module.exports.loginPost = (req, res, next) => {
  if (!req.body.email) {
    req.flash('error', `Please enter email`);
    res.redirect(req.get("Referer") || "/");
    return;
  }
  if (!req.body.password) {
    req.flash('error', `Please enter password`);
    res.redirect(req.get("Referer") || "/");
    return;
  }

  next();
}
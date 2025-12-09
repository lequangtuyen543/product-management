module.exports.registerPost = (req, res, next) => {
  if (!req.body.fullName) {
    req.flash('error', `Please enter fullName`);
    res.redirect(req.get("Referer") || "/");
    return;
  }

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

module.exports.forgotPasswordPost = (req, res, next) => {
  if (!req.body.email) {
    req.flash('error', `Please enter email`);
    res.redirect(req.get("Referer") || "/");
    return;
  }

  next();
}

module.exports.resetPasswordPost = (req, res, next) => {
  if (!req.body.password) {
    req.flash('error', `Please enter password`);
    res.redirect(req.get("Referer") || "/");
    return;
  }

  if (!req.body.confirmPassword) {
    req.flash('error', `Please enter confirmPassword`);
    res.redirect(req.get("Referer") || "/");
    return;
  }

  if (req.body.password != req.body.confirmPassword) {
    req.flash('error', `password not match`);
    res.redirect(req.get("Referer") || "/");
    return;
  }

  next();
}
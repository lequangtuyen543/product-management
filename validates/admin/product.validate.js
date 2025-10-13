module.exports.createPost = (req, res, next) => {
  if (!req.body.title) {
    req.flash('error', `Vui lòng nhập tiêu đề`);
    // res.redirect("back");
    res.redirect(req.get("Referer") || "/");
    return;
  }
  if (req.body.title.length < 1) {
    req.flash('error', `Vui lòng nhập tiêu đề ít nhất 1 ký tự`);
    // res.redirect("back");
    res.redirect(req.get("Referer") || "/");
    return;
  }
  next();
}
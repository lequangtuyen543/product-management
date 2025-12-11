const md5 = require('md5')
const User = require('../../models/user.model')
const ForgotPassword = require('../../models/forgot-password.model')
const Cart = require('../../models/cart.model')

const generateHelper = require('../../helpers/generate')
const sendMailHelper = require('../../helpers/sendMail')

// [GET] /user/register
module.exports.register = async (req, res) => {
  res.render('client/pages/user/register', {
    pageTitle: 'Register'
  })
}

// [POST] /user/register
module.exports.registerPost = async (req, res) => {
  const existEmail = await User.findOne({
    email: req.body.email
  })

  if (existEmail) {
    req.flash('error', 'email exist');
    res.redirect(req.get("Referer") || "/");
    return;
  }

  req.body.password = md5(req.body.password)

  const user = new User(req.body)
  await user.save()

  res.cookie('tokenUser', user.tokenUser)

  res.redirect("/");
}

// [GET] /user/login
module.exports.login = async (req, res) => {
  res.render('client/pages/user/login', {
    pageTitle: 'Login'
  })
}

// [POST] /user/login
module.exports.loginPost = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await User.findOne({
    email: email,
    deleted: false
  })

  if (!user) {
    req.flash('error', 'email not exist')
    res.redirect(req.get("Referer") || "/");
    return;
  }

  if (md5(password) !== user.password) {
    req.flash('error', 'password not correct')
    res.redirect(req.get("Referer") || "/");
    return;
  }

  if (user.status === 'inactive') {
    req.flash('error', 'status not active')
    res.redirect(req.get("Referer") || "/");
    return;
  }

  // console.log 
  await Cart.updateOne({
    _id: req.cookies.cartId
  }, {
    user_id: user.id
  })

  res.cookie('tokenUser', user.tokenUser)

  res.redirect('/')
}

// [GET] /user/logout
module.exports.logout = async (req, res) => {
  res.clearCookie('tokenUser')
  res.redirect('/')
}

// [GET] /user/password
module.exports.forgotPassword = async (req, res) => {
  res.render('client/pages/user/forgot-password', {
    pageTitle: 'Forgot password'
  })
}

// [POST] /user/password
module.exports.forgotPasswordPost = async (req, res) => {
  const email = req.body.email;

  const user = await User.findOne({
    email: email,
    deleted: false
  })

  if (!user) {
    req.flash('error', 'email not exist');
    res.redirect(req.get('Referer'))
    return;
  }

  //Lưu thông tin vào 
  const otp = generateHelper.generateRandomNumber(8);

  const objectForgotPassword = {
    email: email,
    otp: otp,
    expireAt: Date.now()
  }

  const forgotPassword = new ForgotPassword(objectForgotPassword);
  await forgotPassword.save();

  //Nếu tồn tại email thì gửi mã OTP qua email
  const subject = 'Mã OTP xác minh lấy lại mật khẩu'
  const html = `
    Mã OTP để lấy lại mật khẩu là <b>${otp}</b>. Thời hạn sử dụng là 3 phút.
  `
  sendMailHelper.sendEmail(email, subject, html);

  res.redirect(`/user/password/otp?email=${email}`)
}

// [GET] /user/password/otp
module.exports.otpPassword = async (req, res) => {
  const email = req.query.email;

  res.render('client/pages/user/otp-password', {
    pageTitle: 'Otp password',
    email: email
  })
}

// [POST] /user/password/otp
module.exports.otpPasswordPost = async (req, res) => {
  const email = req.body.email;
  const otp = req.body.otp;

  console.log(email)
  console.log(otp)

  const result = await ForgotPassword.findOne({
    email: email,
    otp: otp
  })

  console.log(result)

  if (!result) {
    req.flash('error', 'otp not correct')
    res.redirect(req.get('referer'))
    return
  }

  const user = await User.findOne({
    email: email
  })

  res.cookie('tokenUser', user.tokenUser)

  res.redirect('/user/password/reset')
}

// [GET] /user/password/reset
module.exports.resetPassword = async (req, res) => {
  res.render('client/pages/user/reset-password', {
    pageTitle: 'Reset password'
  })
}

// [POST] /user/password/reset
module.exports.resetPasswordPost = async (req, res) => {
  const password = req.body.password
  const tokenUser = req.cookies.tokenUser

  console.log(password)
  console.log(tokenUser)

  await User.updateOne({
    tokenUser: tokenUser
  }, {
    password: md5(password)
  })

  res.redirect('/')
}

// [GET] /user/info
module.exports.info = async (req, res) => {
  res.render('client/pages/user/info', {
    pageTitle: 'Info',
  })
}
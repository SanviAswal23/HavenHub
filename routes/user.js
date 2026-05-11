const express = require("express");
const router = express.Router();
const passport = require("passport");
const wrapAsync = require("../utils/wrapAsync");

const userController = require("../controllers/users.js");


// ================= SIGNUP =================
router.route("/signup")
  .get(userController.renderSignupForm)
  .post(wrapAsync(userController.signup));


// ================= LOGIN =================
router.route("/login")
  .get(userController.renderLoginForm)
  .post(
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userController.login
  );


// ================= LOGOUT =================
router.route("/logout")
  .post(userController.logout);

module.exports = router;
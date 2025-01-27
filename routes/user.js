//User Routes
const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/users.js");

router
    .route("/signup")
    .get(userController.renderSignupForm) //signupForm
    .post(wrapAsync(userController.signup)); //Signup


router
    .route("/login")
    .get(userController.renderLoginForm) //login
    .post(saveRedirectUrl,
            passport.authenticate("local", {
            failureRedirect: '/login',
            failureFlash: true}),
             wrapAsync(userController.login)); //login

router.get("/logout", userController.logout ); //logout

module.exports = router;
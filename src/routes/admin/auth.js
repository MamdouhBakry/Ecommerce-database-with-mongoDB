const express = require("express");
const { signup, signin, signout } = require("../../controllers/admin/auth");
const { requireSignin } = require("../../common-middleware/index");
const {
  validateRequest,
  isRequestValidated,
  validateSigninRequest,
} = require("../../validators/auth");
const router = express.Router();

router.post("/admin/signin", validateSigninRequest, isRequestValidated, signin);

router.post("/admin/signup", validateRequest, isRequestValidated, signup);
router.post("/admin/signout", signout);

module.exports = router;

const express = require("express");
const { signup, signin } = require("../controllers/auth");
const {
  validateRequest,
  isRequestValidated,
  validateSigninRequest,
} = require("../validators/auth");
const router = express.Router();

router.post("/signin", validateSigninRequest, isRequestValidated, signin);

router.post("/signup", validateRequest, isRequestValidated, signup);

module.exports = router;

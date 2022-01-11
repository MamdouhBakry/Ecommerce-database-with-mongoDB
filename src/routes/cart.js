const express = require("express");
const router = express.Router();
const { addItemToCart, getCartItems } = require("../controllers/cart");
const { requireSignin, userMiddleware } = require("../common-middleware/index");

router.post(
  "/user/cart/addtocart",
  requireSignin,
  userMiddleware,
  addItemToCart
);
router.get("/user/getCartItems", requireSignin, userMiddleware, getCartItems);
module.exports = router;

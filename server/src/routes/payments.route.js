const express = require("express");
const handlePaymentCheckout = require("../controllers/payments/handlePaymentCheckout.controller");
const router = express.Router();

router.post("/create-checkout-session", handlePaymentCheckout);

module.exports = router;

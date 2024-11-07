const express = require("express");
const paymentRouter = require("./payments.route");
const router = express.Router();

router.use("/payments", paymentRouter);

module.exports = router;

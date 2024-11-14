const express = require("express");
const paymentRouter = require("./payments.route");
const plantRouter = require("./plants.route");
const userRouter = require("./users.route");
const router = express.Router();

router.use("/payments", paymentRouter);
router.use("/plants", plantRouter);
router.use("/users", userRouter);

module.exports = router;

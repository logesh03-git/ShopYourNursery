import express, { Request, Response } from "express";
import paymentRouter from "./payments";
import Stripe from "stripe";
const router = express.Router();

router.use("/payments", paymentRouter);

export default router;

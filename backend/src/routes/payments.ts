import express from "express";
import handlePaymentCheckout from "../controllers/handlePaymentCheckout";

const router = express.Router();

router.post("/create-checkout-session", handlePaymentCheckout);

export default router;

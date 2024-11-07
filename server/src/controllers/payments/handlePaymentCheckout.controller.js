const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SK || "");
const FE_URL = process.env.FE || "";

const handlePaymentCheckout = async (req, res) => {
  const { products, shippingCharges } = req.body;
  const lineItems = products.map((product) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: product.title,
        images: product.imgs,
      },
      unit_amount: product.price * 100,
    },
    quantity: product.count,
  }));
  let couponId = "DIWALI30";
  let validCoupon = false;
  try {
    const coupon = await stripe.coupons.retrieve(couponId);
    if (coupon) validCoupon = true;
  } catch (err) {
    validCoupon = false;
  }
  const session = await stripe.checkout.sessions.create({
    discounts: couponId && validCoupon ? [{ coupon: couponId }] : [],
    shipping_address_collection: {
      allowed_countries: ["US"],
    },
    line_items: lineItems,
    mode: "payment",
    success_url: `${FE_URL}/?status=true`,
    cancel_url: `${FE_URL}/?status=false`,
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: shippingCharges, // Shipping cost in cents
            currency: "usd",
          },
          display_name: "Standard Shipping",
          // You can add additional options like delivery estimates if needed
        },
      },
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 1500, // Shipping cost in cents
            currency: "usd",
          },
          display_name: "Express Shipping",
        },
      },
    ],
  });
  // console.log(session);
  res.json({ url: session.url });
};

module.exports = handlePaymentCheckout;

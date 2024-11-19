const nodemailer = require("nodemailer");
require("dotenv").config();
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSKEY,
  },
});
async function sendMail(body) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `Shop Your Nursery <ajayreigns0@gmail.com>`,
    to: body.email,
    subject: `Verification OTP for Your Account`,
    text: `Your OTP: ${body.otp}`,
    html: `<div>
        <strong>Your OTP: </strong>
        <span>${body.otp}. It will expire in 2 minutes</span>
        <br/><br/>
        <pre>ShopYourNursery</pre>
        </div>`,
  });
  return info;
}
module.exports = { sendMail };

const  transporter = require("../config/mailer.js");
const catchAsync = require("../utils/catchAsync.js");

exports.sendOtpEmail = catchAsync(async (email, otp) => {
 
    await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "your OTP",
    text: `your OTP is ${otp}`,
  });
});

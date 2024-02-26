const nodemailer = require("nodemailer")

//verification email
const sendVerificationEmail = async (email, token) => {
  // email configuration
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.my_email,
      pass: process.env.my_password
    }
  });

  const mailOptions = {
    from: process.env.my_email,
    to: email,
    subject: 'Email Verification',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 6px; border-radius: 10px; padding: 20px;">
        <h1 style="color: #333; text-align: center;">Email Verification</h1>
        <p>Hello ${email},</p>
        <p>We have recently received a request for sign up.</p>
        <p>Please verify this email within <strong>5</strong> minutes to sign up successfully.</p>
        <div style="text-align: center;margin-right:30px; margin-top: 20px;">
          <a href="https://sie-server.onrender.com/api/users/verify-email/${token}" style="background-color: #007bff; color: #fff; padding: 10px 15px; text-decoration: none; border-radius: 5px; font-weight: bold;">Verify Email</a>
        </div>
        <p style="margin-top: 20px;">Note: If you have not made this request, please ignore this email.</p>
        <p style="font-size: 12px; color: #999; text-align: center;">All rights reserved @Octathorn</p>
        <p style="font-size: 12px; color: #999; text-align: center;">Thank you</p>
      </div>
      `


  };

  await transporter.sendMail(mailOptions);
};

//reset password email
const sendResetPasswordEmail = async (email,token ) => {
  // email configuration
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.my_email,
      pass: process.env.my_password
    }
  });

  const subject = 'Reset Password';
    const message = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 6px; border-radius: 10px; padding: 20px;">
        <h1 style="color: #333; text-align: center;">Reset Password</h1>
        <p>Hello ${email},</p>
        <p>We have recently received a request for reset password.</p>
        <p>Please reset your password within <strong>5</strong> minutes.</p>
        <div style="text-align: center;margin-right:30px; margin-top: 20px;">
          <a href="https://sie-server.onrender.com/api/users/reset-password/${token}" style="background-color: #007bff; color: #fff; padding: 10px 15px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reset Password</a>
        </div>
        <p style="margin-top: 20px;">Note: If you have not made this request, please ignore this email.</p>
        <p style="font-size: 12px; color: #999; text-align: center;">All rights reserved @Octathorn</p>
        <p style="font-size: 12px; color: #999; text-align: center;">Thank you</p>
      </div>
      `

   const mailOptions = {
    from: process.env.my_email,
    to: email,
    subject: subject,
    html: message
  };
  await transporter.sendMail(mailOptions);

}

////subscription email
const sendSubscriptionEmail = async (email) => {
  // email configuration
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.my_email,
      pass: process.env.my_password
    }
  });

  const subject = 'Subscription Confirmation';
    const message = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 6px; border-radius: 10px; padding: 20px;">
        <h1 style="color: #333; text-align: center;">Subscription Confirmation</h1>
        <p>Hello ${email},</p>
        <p>Thank you for subscribing to our service.</p>
        <p>We will keep you updated with the latest news and offers.</p>
        <p style="margin-top: 20px;">Note: If you did not subscribe to our service, please ignore this email.</p>
        <p style="font-size: 12px; color: #999; text-align: center;">All rights reserved @Octathorn.com</p>
        <p style="font-size: 12px; color: #999; text-align: center;">Thank you</p>
      </div>
      `

   const mailOptions = {
    from: process.env.my_email,
    to: email,
    subject: subject,
    html: message
  };
  await transporter.sendMail(mailOptions);

}


const sendMeetingEmail = async (name, email, time) => {
  // email configuration
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.my_email,
      pass: process.env.my_password
    }
  });

  const subject = '📅 Meeting Confirmation';
  const message = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 6px; border-radius: 10px; padding: 20px;">
      <h1 style="color: #333; text-align: center;">🤝 Meeting Confirmation</h1>
      <p>Hello ${name},</p>
      <p>🕒 Meeting Time: ${time}.</p>
      <p style="font-size: 12px; color: #999; text-align: center;">Thank you for your availability.</p>
      <p style="margin-top: 20px;">Note: If you did not schedule, please ignore this email.</p>
      <p style="font-size: 12px; color: #999; text-align: center;">All rights reserved @Octathorn.com</p>
    </div>
  `;

  const mailOptions = {
    from: process.env.my_email,
    to: email,
    subject: subject,
    html: message
  };
  await transporter.sendMail(mailOptions);
}


module.exports = {
  sendVerificationEmail,
  sendResetPasswordEmail,
  sendSubscriptionEmail,
  sendMeetingEmail
}
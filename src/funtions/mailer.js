var nodemailer = require('nodemailer');

// async..await is not allowed in global scope, must use a wrapper
module.exports.sendEmail = async function (){  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'xxx@gmail.com', // generated ethereal user
        pass: 'xxx' // generated ethereal password
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'xxx@gmail.com', // sender address
      to: 'xxx@gmail.com', // list of receivers
      subject: 'EMERGENCY - PLEASE - ME ✔', // Subject line
      text: 'Your plant needs water!!!!', // plain text body
      html: '<b>Your plant needs water!!!!</b>' // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
  
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
      html: '<h1>Your plant needs water!!!!</h1>' // html body
    });
}
  
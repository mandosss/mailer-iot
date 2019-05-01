var sender = require('../funtions/mailer');

/* GET home page. */
exports.store = async(req, res, next) => {
  if(req.body.passkey == process.env.SECRET_PASSKEY){
    if(req.body.value <32){
      await sender.sendEmail()
      res.status(201).send({message: 'Success!'})
    }
    else{
      res.status(201).send({message: 'Message not sent'})
    } 
  }
  else{
    //res.status(401).send({message: 'Unauthorized'})
    res.status(401).send('key ' + process.env.SECRET_PASSKEY)
  }
};

var sender = require('../funtions/mailer');

/* GET home page. */
exports.store = async(req, res, next) => {
  let tempPasskey = req.params.passkey
  if(tempPasskey == process.env.SECRET_PASSKEY){
      await sender.sendEmail()
      res.status(201).send({message: 'Success!'})
  }
  else{
    res.status(401).send({message: 'Unauthorized'})
  }
};

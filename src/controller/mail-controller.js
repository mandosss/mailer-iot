var sender = require('../funtions/mailer');

/* POST for termperature. */
exports.store = async(req, res, next) => {
  let moistPasskey = req.body.passkey
  let moisture = req.body.moisture
  if(moistPasskey == process.env.SECRET_PASSKEY){
      if (moisture <= process.env.MOISTURE_THRESHOLD){
        await sender.sendEmail()
        res.status(201).send({message: 'Success!'})
      }
      res.status(401).send({message: 'Plant does not need water'})
  }
  else{
    res.status(401).send({message: 'Unauthorized' })
  }
};

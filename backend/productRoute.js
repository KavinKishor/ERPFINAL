const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function(req, res, next) {
  const {token} = req.header('Authorization')
  if (token) {
    jwt.verify(token,process.env.TOKEN,{},(err,user)=>{
      if(err) throw err
      res.json(user)
    })
    }else{
    res.json(null)
  }
};

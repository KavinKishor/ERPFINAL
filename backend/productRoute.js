const jwt = require('jsonwebtoken');
const Loginschema = require('./schemas/Loginschema');


const protect = async(req,res,next)=>{
  let token ;
  if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
    try {
      token = req.headers.authorization.split(' ')[1]
      const decode = jwt.verify(token,process.env.TOKEN)
      req.user = await Loginschema.findById(decode.id).select("-password")
      next()
    } catch (error) {
      console.log(error);
      res.status(401).json(error)
    }
  }
}
module.exports = {protect}
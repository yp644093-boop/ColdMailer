import jwt from "jsonwebtoken"
import User from "../model/auth.model.js"
export const authMiddleware=async(req,res,next)=>{
    try{
        const token=req.headers.authorization.split(" ")[1]
        console.log(token)
        const decoded=jwt.decode(token,process.env.JWT_SECRET)
        console.log(decoded)
        const user=await User.findById(decoded.userId)

        if(!user){
            return res.status(401).json({
                msg:"user not found"
            })
        }

        req.user=user
        next()

    }catch(error){
      console.log("auth middleware error:",error.message)

      return res.status(500).json({
        msg:"Token is Required"
      })
    }
}
import jwt from "jsonwebtoken"

export const isAuthenticated = (req, res, next)=>{
    try{
        const {token} = req.cookies

        if(!token){
            return res.status(401).json({message:"khong dung chu the", success:false})
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRECT)

        req.user = decoded

        next()
    }

    catch(error){
        return re.status(401).json({message:"khong dung chu the", success:false})
    }
}
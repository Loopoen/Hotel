export const isOwner = (req, res, next)=>{
    try{
        const {token} = req.cookies 
        if(req.user && req.user.role === "owner"){
            next()
        }else{
            return res.status(401),json({message:"khong dung chu the", success:false})
        }
    }
    catch(err){
        return res.status(401).json({message:"khong dung chu the", success:false})
    }
}
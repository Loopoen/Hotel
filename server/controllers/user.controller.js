import User from "../models/user.model.js";

import bcrypt from "bcryptjs"

import jwt from "jsonwebtoken"

export const signup = async(req, res)=>{
    try{
        const {name, email,  password , role} = req.body

        if(!name || !email || !password || !role){
            return res.json({message:"du cac filed ", success:false})
        }

        const existingUser= await User.findOne({email})

        if(existingUser){
            return res.json({message:"user already exist", success:false})
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await User({
            name, email, password: hashedPassword,role
        })

        await newUser.save()

        return res.status(201).json({
    message: "User registered successfully",
    success: true
});
    }
    catch(err){
        return res.json({message:"loi server", success:false })
    }
}

export const login = async(req, res)=>{
    try{
        const {email, password} = req.body

        if(!email || !password){
            return res.json({
                message:"toan bo require phai can co", success:false
            })
        }

        const user = await User.findOne({email})
        if(!user){
            return res.json({message:"user khong ton tai" , success:false})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch){
            return res.json({message:"loi password", success:false})
        }

        const token = jwt.sign({id:user._id, role:user.role}, process.env.JWT_SECRECT,
            {
                expiresIn:"1d"
            }
        )

        res.cookie("token", token, {
            httpOnly:true,
            maxAge:24*60*60*1000
        })

        return res.json({message:"login successfull", success:true, user})
    }
    catch(err){
        return res.json({message:"loi server ", success:false})
    }
}

export const logout = async(req, res)=>{
    try{
        res.clearCookie("token")

        return res.json({message:"logout thanh cong", success:true})
    }
    catch(err){
        return res.json({message:"loi server", success:false})
    }
}

export const isAuth = async(req, res)=>{
    const {id} = req.user
    const user = await User.findById(id).select("-password")

    try{
        res.json({success:true, user})
    }
    catch(err){
        return res.json({message:"loi server", success:false})
    }
}
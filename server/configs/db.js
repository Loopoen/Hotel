import mongoose from "mongoose"

const connectDB = async()=>{
    try{
        mongoose.connection.on('connected', ()=>console.log("connected"))
        await mongoose.connect(`${process.env.MONGODB_URL}/hotel`)
    }
    catch(error){
        console.log(error.message)
    }
}

export default connectDB
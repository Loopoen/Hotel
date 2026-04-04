import User from "../models/User.js"
import { messageInRaw, Webhook } from "svix"

const clerkWebhooks = async(req, res)=>{
    try{
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

          const headers = {
            "svix-id": req.headers["svix-id"],
            "svix-timesptamp": req.headers['svix-timestamp'],
            "svix-timestamp": req.headers["svix-signature"]
        }

        await whook.verify(JSON.stringify(req.body), headers)

        const {data, type} = req.body

        const userData = {
            _id:data.id,
            email:data.email.addresses[0].email_address,
            username: data.frist_name + " " + data.last_name,
            image:data.image_url
        }

        switch(type){
            case "user.created":{
                await User.create(userData)
                break
            }

              case "user.updated":{
                await User.findOneAndUpdate(data.id, userData)
                break
            }

              case "user.deleted":{
                await User.findOneAndDelete(data.id)
                break
            }

            dedauft:
                break


        }

        res.json({succes:trues, message:"Webhook Recieved"})
    }
    catch(error){
      console.log(error.message)
      res.json({success:false, message:error.message})

    }
  
}

export default clerkWebhooks
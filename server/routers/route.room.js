import express from "express"
import {upload} from "../configs/multer.js"
import { isAuthenticated } from "../middleware/isAuthenticated.js"
import {isOwner} from "../middleware/isOwner.js"
import { addRoom, deleteRoom, getAllRooms, getOwnerRooms } from "../controllers/room.controller.js"
const routerRoom = express.Router()

routerRoom.post("/add", upload.array("images"), isAuthenticated, isOwner, addRoom)
routerRoom.get("/get", isAuthenticated, isOwner, getOwnerRooms)
routerRoom.get("/get-all", getAllRooms)
routerRoom.delete("/delete/:roomId", isAuthenticated, isOwner, deleteRoom )

export default routerRoom
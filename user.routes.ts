import { Router } from "express";
import userController from "./user.controller";

const {
    addUser , 
    getUser , 
    removeUser , 
    getUsers
} = userController

const userRouter = Router() 

userRouter.route("/users")
.get(getUsers)
.post(addUser) 

userRouter.route("/users/:id") 
.get(getUser) 
.delete(removeUser) 

export default userRouter
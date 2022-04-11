import IUser from "./user.interface"; 
import {Schema , model} from "mongoose" 

const userSchema = new Schema<IUser>({
    name : String , 
    email : String, 
    mobile : String
})

const UserModel = model<IUser>("users" , userSchema) 

export default UserModel
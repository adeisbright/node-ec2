import IUser from "./user.interface";
import UserModel from "./user.model";

class UserDAO {
    async addUser(data : IUser){
        return await UserModel.create(data)
    }

    async getUsers(){
        return await UserModel.find({})
    }

    async getUser(id : string){
        return await UserModel.findById(id)
    }

    async removeUser(id : string){
        return await UserModel.findByIdAndDelete(id)
    }
}

export default new UserDAO()
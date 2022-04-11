import userDao from "./user.dao";
import IUser from "./user.interface";

class UserServices{
    async addUser(data : IUser){
        return await userDao.addUser(data)
    }

    async getUsers(){
        return await userDao.getUsers()
    }

    async getUser(id : string){
        return await userDao.getUser(id)
    }

    async dropUser(id  :string){
        return await userDao.removeUser(id)
    }
}

export default new UserServices()
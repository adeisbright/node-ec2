import { NextFunction, Request, Response } from "express";
import userServices from "./user.services";

class UserController {
    async addUser(
        req : Request,
        res : Response 
    ){
        try{
            const user = await userServices.addUser(req.body)
            res.status(201).json({
                statusCode : 201 , 
                message : "User Added" , 
                body : user
            })
        }catch(error : any){
           res.status(500).json({
               message : error.message
           })
        }
    }

    async getUsers(
        req : Request,
        res : Response 
    ){
        try{
            const users = await userServices.getUsers()
            res.status(200).json({
                statusCode : 200 , 
                message : "Users retrieved" , 
                body : users
            })
        }catch(error : any){
            res.status(500).json({
                message : error.message
            })
        }
    }

    async getUser(
        req : Request,
        res : Response 
    ){
        try{
            const user = await userServices.getUser(req.params.id)
            res.status(200).json({
                statusCode : 200 , 
                message : "User retrieved" , 
                body : user
            })
        }catch(error : any){
            res.status(500).json({
                message : error.message
            })
        }
    }

    async removeUser(
        req : Request,
        res : Response 
    ){
        try{
            await userServices.dropUser(req.params.id)
            res.status(200).json({
                statusCode : 200 , 
                message : "User dropped" , 
                body : {}
            })
        }catch(error : any){
            res.status(500).json({
                message : error.message
            })
        }
    }
}

export default new UserController()
import { Request, Response } from "express";
import {  UserService } from "../services/UserService";

const Userservice = new UserService()

class UserController{
    async getAllUsers(req:Request,res:Response):Promise<Response>{
        try {
                const user = await Userservice.getAll()
                return res.json(user)            
        }
        catch(error){
             return res.status(400).json({error})
        }
    }

    async getbyid(req:Request,res:Response){
        try {
            const user = await Userservice.getbyId(Number(req.params.id))
            return user
        } catch (error) {
            return res.status(400).json(error)
        }
    }
}


export default  UserController;
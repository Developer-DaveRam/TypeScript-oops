import UserModel, { User } from "../models/User";
import { BaseService } from "./BaseService";

export class UserService extends BaseService<User>{
    
    private UserModel = new UserModel()


    async getAll(): Promise<User[]> {
        return  this.UserModel.getAll()
    }

    async getbyId(id: number): Promise<User | null> {
        return this.UserModel.getbyId(id)
    }

    async deletebyId(id: number): Promise<boolean> {
        return this.UserModel.deletebyId(id)
    }
    
    
}
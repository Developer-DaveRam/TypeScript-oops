"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = require("../services/UserService");
const Userservice = new UserService_1.UserService();
class UserController {
    async getAllUsers(req, res) {
        try {
            const user = await Userservice.getAll();
            return res.json(user);
        }
        catch (error) {
            return res.status(400).json({ error });
        }
    }
    async getbyid(req, res) {
        try {
            const user = await Userservice.getbyId(Number(req.params.id));
            return user;
        }
        catch (error) {
            return res.status(400).json(error);
        }
    }
}
exports.default = UserController;

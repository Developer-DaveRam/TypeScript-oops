"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const User_1 = __importDefault(require("../models/User"));
const BaseService_1 = require("./BaseService");
class UserService extends BaseService_1.BaseService {
    constructor() {
        super(...arguments);
        this.UserModel = new User_1.default();
    }
    async getAll() {
        return this.UserModel.getAll();
    }
    async getbyId(id) {
        return this.UserModel.getbyId(id);
    }
    async deletebyId(id) {
        return this.UserModel.deletebyId(id);
    }
}
exports.UserService = UserService;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const BaseMode_1 = __importDefault(require("./BaseMode"));
class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}
exports.User = User;
class UserModel extends BaseMode_1.default {
    constructor() {
        super("user");
    }
    mapRowToModel(row) {
        return new User(row.id, row.name, row.email);
    }
}
exports.default = UserModel;

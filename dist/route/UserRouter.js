"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = __importDefault(require("../controllers/UserController"));
const userRouter = express_1.default.Router();
userRouter.get("/getById/:id", async (req, res) => {
    const id = Number(req.params.id);
    await new UserController_1.default().getbyid(req, res);
});
exports.default = userRouter;

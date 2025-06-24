import express from 'express'
import UserController from '../controllers/UserController'

const userRouter = express.Router()

userRouter.get("/getById/:id", async (req, res) => {
  const id = Number(req.params.id);
  await new UserController().getbyid(req,res);
});


export default userRouter
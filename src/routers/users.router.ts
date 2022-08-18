import express from "express";
import {UsersModel} from "../models/users.model";
import {UsersController} from "../controllers/users.controller";

//on récupère le router d'express
const router = express.Router();
const userModel = new UsersModel()
const userController = new UsersController(userModel)

router.get("/users", userController.getUsers)
router.get('/user/:id', userController.getUserById)
router.get("/users/:id", userController.deleteUserById)
router.get('/create', userController.goToCreateUser)
router.post("/createNew", userController.createUser)
router.get('/updateUser', userController.goToUpdateUser)
router.put('/updateThisUser', userController.updateUser)
export default router;
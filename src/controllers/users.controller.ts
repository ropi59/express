import {UsersModel} from "../models/users.model";
import {Request, Response} from "express";

export class UsersController {

    private userModel: UsersModel;

    constructor(model: UsersModel) {
        this.userModel = model;
    }

    getUsers = async (req: Request, res: Response) => {
        const users = await this.userModel.getUsers().then(res => res.data).catch(err => console.log(err))
        res.render('users', {users})
    }

    getUserById = async (req: Request, res: Response) => {
        const user = await this.userModel.getUser(req.params.id).then(res => res.data)
        res.render('user', {user})
    }

    deleteUserById = async (req: Request, res: Response) => {
        this.userModel.deleteUser(req.params.id)
        res.redirect('/users')
    }

    goToCreateUser = async (req: Request, res: Response) => {
        res.render('createUser')
    }

    createUser = async (req: Request, res: Response) => {
        this.userModel.createUser(req.body)
        res.redirect('/users')
    }

    goToUpdateUser = async (req: Request, res: Response) => {
        res.render('updateUser')
    }

    updateUser = async (req: Request, res: Response) => {
        this.userModel.updateUser(req.body)
        res.redirect('/users')
    }
}
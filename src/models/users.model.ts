import axios from "axios";
import 'dotenv/config'
import {UserDto} from "../dtos/user.dto";

export class UsersModel {

    //recuperation de l'uri de json server
    uri: string = process.env.URI||"toto";

    //recuperation de la liste des utilisateurs
    getUsers = async () => {
        return axios.get(this.uri)
    }

    //recuperation des infos d'un utilisateur
    getUser = async (id: string) => {
        return axios.get(`${this.uri}/${id} `)
    }

    //suppression d'un utilisateur par son id
    deleteUser = async (id:string) => {
        axios.delete(`${this.uri}/${id} `)
    }

    //creation d'un utilisateur
    createUser = async (user : UserDto) => {
        axios.post(this.uri, user)
    }

    //modification d'un utilisateur
    updateUser = async (user : UserDto) => {
        axios.put(this.uri, user)
    }
}
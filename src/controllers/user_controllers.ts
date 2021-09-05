import { Request, Response, NextFunction } from 'express'
import db from '../models';
import { User } from '../interface/user_interface'
import {v4 as uuidv4} from 'uuid'

export
const getAllUsers = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const users: User[] = await db.User.findAll()
        return res.status(200).json(users)
    }
    catch (err) {
        console.log(err)
    }
}

export
const getUser = async (req:Request, res:Response, next:NextFunction) => {
    try {
        let id:string = req.params.id
        const user: User = await db.User.findByPk(id);
        return res.status(200)
            .send(user)
    }
    catch (err) {
        console.log(err)
    }
}

export
const addUser = async (req:Request, res:Response, next:NextFunction) => {
    try {
        let body = req.body
        console.log(body)
        if('name' in body && 'email' in body && 'password' in body) {
            const { name, email, password } = body
            const user:User = {
                id:uuidv4(),
                name: name,
                email: email,
                password: password
            }

            await db.User.create(user)

            return res.status(200)
                .send(JSON.stringify({'message':'Success'}))
        }
        return res.status(400)
            .send(JSON.stringify({'message':'Failed. User needs: name, email, address. Email may be inside database already.'}))
    }
    catch(error) {
        console.log(error)
        return res.status(500)
            .send(JSON.stringify({"message":"Failed. Check internet"}))
    }
}

export
const updateUser = async (req:Request, res:Response, next:NextFunction) => {
    try {
        let id:string = req.params.id
        let body = req.body
        if('name' in body && 'email' in body && 'password' in body) {
            const { name, email, password } = body
            const user:User = {
                id: id,
                name: name,
                email: email,
                password: password
            }

            await db.User.update({ 
                    name: user.name,
                    email: user.email,
                    password: user.password 
                }, 
                {
                    where: {
                        userId: user.id
                    }
                });

            return res.status(200)
                .send(JSON.stringify({'message':'Success'}))
        }
        return res.status(400)
            .send(JSON.stringify({'message':'Failed. User needs: name, email, address'}))
    }
    catch(error) {
        console.log(error)
        return res.status(500)
            .send(JSON.stringify({"message":"Failed. Check internet or user id probably doesn't exist"}))
    }
}

export
const deleteUser = async (req:Request, res:Response, next:NextFunction) => {
    try {
        let id:string = req.params.id

        await db.User.destroy({
            where: {
              userId: id
            }
          });

        return res.status(200)
            .send(JSON.stringify({'message':'Success'}))
    }
    catch(error) {
        console.log(error)
        return res.status(500)
            .send(JSON.stringify({"message":"Failed. Check internet or user id probably doesn't exist"}))
    }
}
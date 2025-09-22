import express  from "express";
import { createUser, getUsers, modifiedUser, removeUser, selectOneUser, updateSelectedUserByID } from "./model.js";

export const getAll = async (req:express.Request, res:express.Response) =>{
   try{
        const data = await getUsers();
        res.status(200)
        .type("application/json")
        .send(data);
   }catch(error){
    res.status(500).type("application/json").send({error: `Users request failed.`})
   }
}

export const addUser = async(req:express.Request, res:express.Response)=>{
    const newUser = req.body;
    try{
        const user = await createUser(newUser);
        res.status(201).type("application/json").send(user)
    }catch(error){
        res.status(500).type("application/json").send({error: `Nem sikerült létrehozni.`})
    }
}

export const deleteUser = async(req:express.Request, res:express.Response) =>{
    const id = parseInt(req.params.id!)
    const result = await removeUser(id)
    if(result){
        res.status(200)
        .type("application/json")
        .send({message: "Removed successfully."})
    }
    else{
        res.status(500)
        .type("application/json")
        .send({message: "Error"})
    }
}

export const updateUser = async (req:express.Request, res:express.Response)=>{
    const updateUser = req.body;
    const id = parseInt(req.params.id!, 10);
    let response = {};
    try{
        const result = await modifiedUser(id, updateUser);
        response = result ? {mesage: "Successful operation."} : {error : "Failed operation."};
        
        res.status(201)
        .type("application/json")
        .send(response)
    }catch(error){
        res.status(500).type("application/json").send(response);
    }
}

export const selectUser = async (req:express.Request, res:express.Response) =>{
    const id = parseInt(req.params.id!)
    try{
        const data = await selectOneUser(id);
        if(data.length === 0){
            res.status(400)
            .type("application/json")
            .send({error: "A felhasználó nem létezik."})
        }
        res.status(200)
        .type("application/json")
        .send(data);
   }catch(error){
    res.status(500).type("application/json").send({error: `Szerverhiba.`})
   }
}

export const updateFullUser = async (req:express.Request, res:express.Response) =>{
    const user = req.body;
    const id = parseInt(req.params.id!, 10);
    let response = {};
    try{
        const result = await updateSelectedUserByID(id, user);
        const response = result ? {mesage: "Successful operation."} : {error : "Failed operation."};

        res.status(201)
        .type("application/json")
        .send(response)
    }catch(error){
        res.status(500).type("application/json").send(response);
    }
}
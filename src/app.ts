import express from 'express';
import db from './models';
//import below not needed just wanted to show how to create one user instance so i imported this
import {v4 as uuidv4} from 'uuid'

//USING A SEEDER ////////////////////////////////////////////////////////
// import {users} from './seeders/users';
// const createUsers=()=>{
//     users.map(user=>{
//         db.User.create(user)
//     })
// }
// createUsers();
// NEXT HOW TO CREATE ONLY ONE
///////////////////////////////////////////////////////////////////////////////////
// You Can USE this Seeder for all your models or just use the create command to create one instance of a model
//like
// db.User.create({
//     id:uuidv4(),
//     name:"smith",
//     email:"example@aol.com",
//     password:"superpassword"
// })
//END OF using a seeder file  //////////////////////////////////////////

const app =express();
const port=process.env.PORT || 3000;

db.sequelize.sync()
.then(()=>{
    app.listen(port,()=>{
        console.log(`running on port ${port}`)
    })
})





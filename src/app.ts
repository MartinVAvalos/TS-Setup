import express, {Request,Response,NextFunction,RequestHandler} from 'express'
import db from './models';
import userRoutes from './routes/user_routes'
//import below not needed just wanted to show how to create one user instance so i imported this
import {v4 as uuidv4} from 'uuid'

const app =express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

//The is for handling cors
app.use((req: Request, res: Response, next: NextFunction)=>{    
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type, Accept');
    if('OPTIONS'==req.method){
        // can later use this for ip tracking
    }
    // else{console.log(`An error has occured :${req.ip} ${req.method} ${req.url}`)
    //     // this will be good for finding users having loading problems
    //     next(); // Pass to next layer of middleware
    // }
    next()
});


app.use('/user', userRoutes)


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

const port=process.env.PORT || 3000;

db.sequelize.sync()
.then(()=>{
    app.listen(port, async()=>{
        console.log(`running on port ${port}`)
    })
})





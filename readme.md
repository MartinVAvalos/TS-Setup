
ADDING OR REMOVING MODELS
To continue to add more models you can run the command:
npx sequelize-cli model:generate --name Project --attributes tiltle:string
                            --name [name of table] --attributes [can add these later after creating model]
MODELS DO NOT HAVE TO BE CREATED TOGETHER!!!!

IF you change or add models all you have to do is use sync(force:true) to make model take into affect aka
start the server npm run dev




RESOURCES
This is the example I used to create this ts-setup
https://github.com/willjw3/sequelize-typescript-tutorial

Documentation for this code
https://sequelize.org/master/manual/typescript.html

to run you can also use
nodemon ./src/app.ts
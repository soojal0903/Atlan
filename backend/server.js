const app = require("./app")

const dotenv = require("dotenv");
const connectDatabase  = require("./config/database")

//handle uncaught erros
process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`Shutting down server due to uncaught Exception`)
    
    process.exit(1);
})

//Config

dotenv.config({path:"config/config.env"});

//Connecting to Database
connectDatabase()

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
})

//unhandled promise rehection
process.on("unhandledRejection",err=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down server due to unhandled rejection`);
    server.close(()=>{
        process.exit(1);
    })
})
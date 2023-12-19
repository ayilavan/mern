const express = require('express');
require('dotenv').config()
const app= express();
const mongoose = require('mongoose');
const taskRoutes= require("./routes/taskRoute");


//Middleware
app.use((req,res,next)=>{

    console.log("path" + req.path+"method"+ req.method);
    next();
})
app.use(express.json());

// app.get('/',(req,res)=>{
//     res.send("Hello World");
// })

mongoose.connect(process.env.MONGO_URI) .then(()=>{
    app.listen(process.env.PORT,()=> {
        console.log("DB connected Succesfully and listening to" +process.env.PORT);
    })
}).catch((error)=> console.log(error));

// app.listen("4000",()=>{
//     console.log("listening to 4000");
// })

app.use("/api/task", taskRoutes);
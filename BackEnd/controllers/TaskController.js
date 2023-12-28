const  mongoose  = require("mongoose");
const TaskModel = require("../models/TaskModel");

const createTask= async(req,res)=>{
    //comment
    const{title,description}=req.body
    try{
    const task = await TaskModel.create({title,description})
    res.status(200).json(task)
}catch(e){
    res.status(400).json({error:e.message})
}
};
// To get all tasks- GET
const getTasks= async(req,res)=>{
    try{
        const tasks = await TaskModel.find({})
    res.status(200).json(tasks)
}catch(e){
    res.status(400).json({error:e.message})
}
    };
    // To get Single Tasks
    const getSingleTask = async (req, res)=> {
        const {id}= req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({message: "Task Not Found"});
        }
        try {
            const singleTask =await TaskModel.findById(id);
            res.status(200).json(singleTask);
        }catch (e){
            res.status(400).json({error:e.message});
        }
    }

module.exports= {createTask,getTasks, getSingleTask};
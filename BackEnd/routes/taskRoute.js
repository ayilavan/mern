const express=require("express");
const router= express.Router();
const  {createTask}= require("../controllers/TaskController");
router.post("/",createTask);

module.exports=router;
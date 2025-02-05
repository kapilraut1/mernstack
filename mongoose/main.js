import mongoose from "mongoose";
import express from "express";
import {Todo} from './modules/todo.js'


let a = await mongoose.connect("mongodb://localhost:27017/todo");

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo= new Todo({title: 1, disc: "Hey", isDone: false});
    todo.save();
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
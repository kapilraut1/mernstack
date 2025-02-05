import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    title: String,
    disc: String,
    isDone: Boolean

});

export const Todo = mongoose.model('Todo', TodoSchema);
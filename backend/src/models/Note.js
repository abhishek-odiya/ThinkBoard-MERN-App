import mongoose from "mongoose";

//1st step: you need to create schema
//2nd step: you would create a schema based off that schma

// 1st step
const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }      // createdAt, updatedAt
);


// 2nd step
const Note = mongoose.model("Note", noteSchema);

export default Note;
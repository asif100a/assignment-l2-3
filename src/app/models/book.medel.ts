import { Schema } from "mongoose";
import { Book } from "../interfaces/book.interface";

const bookSchema = new Schema<Book>({
    title: {
        type: String,
        required: [true, '"title" is required'],
    },
    author: {
        type: String,
        required: [true, '"author" is required']
    },
    genre: {
        type: String
    }
})
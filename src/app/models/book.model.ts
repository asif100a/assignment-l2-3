import { model, Schema } from "mongoose";
import { TBook } from "../interfaces/book.interface";

const bookSchema = new Schema<TBook>({
    title: {
        type: String,
        required: [true, '"Title" is required'],
    },
    author: {
        type: String,
        required: [true, '"Author" is required']
    },
    genre: {
        type: String,
        required: [true, '"Genre" is required'],
        enum: ['FICTION', 'NON_FICTION', 'SCIENCE', 'HISTORY', 'BIOGRAPHY', 'FANTASY']
    },
    isbn: {
        type: String,
        required: [true, '"ISBN" is required']
    },
    description: {
        type: String,
        required: false
    },
    copies: {
        type:Number,
        required: [true, '"Copies" is required']
    },
    available: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true,
    versionKey: false
})

const Book = model('book', bookSchema);
export default Book;
import { Request, Response } from "express";
import Book from "../models/book.model";
import { getErrorMessage } from "../../utils";

const createBook = async (req: Request, res: Response) => {
    try {
        const data = req.body;

        const result = await Book.create(data)

        res.json({
            success: true,
            message: "Book created successfully",
            data: result
        })
    } catch (error: unknown) {
        console.error('❌ Error creating book: ', error)
        res.json({
            message: getErrorMessage(error),
            success: false,
            error
        })
    }
}

const getBooks = async (req: Request, res: Response) => {
    try {
        const data = await Book.find()

        res.json({
            success: true,
            message: "Books retrieved successfully",
            data
        })
    } catch (error: unknown) {
        console.error('❌ Error retrieving books: ', error)
        res.json({
            message: getErrorMessage(error),
            success: false,
            error
        })
    }
}

const getBookById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = await Book.findById(id)

        res.json({
            success: true,
            message: "Book retrieved successfully",
            data
        })
    } catch (error: unknown) {
        console.error('❌ Error retrieving book by id: ', error)
        res.json({
            message: getErrorMessage(error),
            success: false,
            error
        })
    }
}

const updateBookById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updateDoc = req.body;

        const data = await Book.findByIdAndUpdate(id, updateDoc, { new: true, runValidators: true })

        res.json({
            success: true,
            message: "Book updated successfully",
            data
        })
    } catch (error: unknown) {
        console.error('❌ Error updating book by id: ', error)
        res.json({
            message: getErrorMessage(error),
            success: false,
            error
        })
    }
}

const deleteBookById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = await Book.findByIdAndDelete(id)

        res.json({
            success: true,
            message: "Book deleted successfully",
            data: null
        })
    } catch (error: unknown) {
        console.error('❌ Error deleting book by id: ', error)
        res.json({
            message: getErrorMessage(error),
            success: false,
            error
        })
    }
}

export const bookController = {
    createBook,
    getBooks,
    getBookById,
    updateBookById,
    deleteBookById,
}
import { Router } from "express";
import { bookController } from "../controllers/book.controller";

const bookRouter = Router();

bookRouter.post('/', bookController.createBook)
bookRouter.get('/', bookController.getBooks)
bookRouter.get('/:id', bookController.getBookById)
bookRouter.put('/:id', bookController.updateBookById)
bookRouter.delete('/:id', bookController.deleteBookById)

export default bookRouter;
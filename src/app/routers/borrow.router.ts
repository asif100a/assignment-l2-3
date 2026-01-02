import { Router } from "express";
import { BorrowController } from "../controllers/borrow.controller";

const borrowRouter = Router()

borrowRouter.post('/', BorrowController.createBorrowRequest)

export default borrowRouter;
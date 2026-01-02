import { Request, Response } from "express";
import { getErrorMessage } from "../../utils";

const createBorrowRequest = (req: Request, res: Response) => {
    try {
        console.log('Req Body: ', req.body)
    } catch (error) {
        console.error('❌ Error creating Borrow Request: ', error)
        res.json({
            message: getErrorMessage(error),
            success: false,
            error
        })
    }
}

export const BorrowController = {
    createBorrowRequest
}
import { model, Schema } from "mongoose";
import { TBorrow } from "../interfaces/borrow.interface";

const borrowSchema = new Schema<TBorrow>({
    book: {
        type: Schema.Types.ObjectId,
        ref: 'book',
        required: [true, '"Book" is required']
    },
    quantity: {
        type: Number,
        required: [true, '"Quantity" is required']
    },
    dueDate: {
        type: Date,
        required: [true, '"Due Date" is required']
    }
}, {
    timestamps: true,
    versionKey: false
})

const Borrow = model('borrow', borrowSchema)
export default Borrow
 import express, {type Application, type Request, type Response} from 'express';
 import 'colors'
import bookRouter from './app/routers/book.router';
import borrowRouter from './app/routers/borrow.router';

const app: Application = express();

// Middlewares
app.use(express.json())

// Routers
app.use('/api/books', bookRouter)
app.use('/api/borrow', borrowRouter)

// Root GET
app.get('/', (req: Request, res: Response) => {
    res.json({
        success: true,
        status: 200,
        message: 'The server is running...'
    })
})

export default app;
 import express, {type Application, type Request, type Response} from 'express';
 import 'colors'

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
    res.json({
        success: true,
        status: 200,
        message: 'The server is running...'
    })
})

export default app;
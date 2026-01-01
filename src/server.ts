import type { Server } from 'http'
import app from './app';
import mongoose from 'mongoose';
import { config } from './config/env.config';

let server: Server;
const port = process.env.PORT || 5000;

const uri = config.mongodb_uri || ''

const main = async () => {
    try {
        await mongoose.connect(uri)
        console.log('MongoDB connected successfully'.green.bold)
        server = app.listen(port, () => {
            console.log(`The server is running on http://localhost:${port}`.america.bold);
        })
    } catch (error) {
        console.error('❌ Error connecting server: ', error);
    }
}

main()
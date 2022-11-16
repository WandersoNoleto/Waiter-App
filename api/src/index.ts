import * as dotenv from 'dotenv';
dotenv.config();

import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';

mongoose.connect(`mongodb+srv://${process.env.USER}:@${process.env.PASSWORD}@cluster0.ut2gdxl.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        const app  = express();
        const port = 3001;

        app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
        app.use(express.json());
        app.use(router);

        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })

    .catch(() => console.log('Mongo connection FAIL'));

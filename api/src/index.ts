import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';



mongoose.connect('mongodb+srv://wnoleto:Quadrado2@cluster0.pr2z02y.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        const app  = express();
        const port = 3001;

        app.use(router);

        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })

    .catch(() => console.log('Mongo connection FAIL'));

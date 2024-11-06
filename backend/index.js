import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import officialsRoute from './routes/officialsRoute.js';
import cors from 'cors';

const app = express();

//middleware for parsing json request bodies
app.use(express.json());

//for handling cors policy
app.use(cors());

//route for testing the api
app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('CRUD KANG OFFICIALS PALANG');
});

//officials route
app.use('/officials', officialsRoute);
 
//connect to mongodb and start server
mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('Successfully connected to Database');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });


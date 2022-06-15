const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');

//import routes
const authRouter = require('./routes/auth');
const app = express();
dotenv.config();

//database connection
const db_connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log('Connected to MongoDB');
    } catch (error) {
        throw error;
    }
}


//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/api/auth', authRouter);

app.listen(3000 , () =>{
    console.log('Server on port 3000');
    db_connect();
})

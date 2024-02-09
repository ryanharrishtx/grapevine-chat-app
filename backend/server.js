const express  = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const colors = require ('colors');
const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

dotenv.config();
connectDB();
const app = express();

app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);


app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3002;

app.use('/api/user', userRoutes);

app.listen(3002, console.log(`Server running on port ${PORT}`.yellow.bold));

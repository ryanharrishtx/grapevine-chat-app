const express  = require('express');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
    res.send("API is running successfully");
});


app.listen(3002, console.log(`Server running on port ${PORT}`));

require('dotenv').config();
const express = require('express');
const router = require('./app/router');

const app = express();

const port = process.env.PORT || xxxx;



app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
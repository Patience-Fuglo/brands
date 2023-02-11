const express = require('express');
require('dotenv').config();

const brandRoutes = require('./controllers/brand');

const app = express();

app.use('/brands', brandRoutes);

const PORT = process.env.PORT;

app.listen(PORT, console.log(`listening to the ${PORT}...`)) 
const express = require('express');
require('dotenv').config();

const brandRoutes = require('./controllers/brand');

const app = express();

//Middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/brands', brandRoutes);

const PORT = process.env.PORT;

app.listen(PORT, console.log(`listening to the ${PORT}...`)) 
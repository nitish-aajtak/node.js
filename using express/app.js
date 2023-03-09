const bodyparser = require('body-parser');
const express = require('express');
const app = express();
const admin = require('./routes/admin');
const shop = require('./routes/shop');

// express does not process incoming requests thus we need to middleware to a parse incoming request body 
app.use(bodyparser.urlencoded({extended:false}))

app.use(admin);

app.use(shop);

app.listen(4000);
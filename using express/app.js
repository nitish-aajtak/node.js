const express = require('express');
const path = require('path');

const app = express();
const bodyparser = require('body-parser');

const admin = require('./routes/admin');
const shop = require('./routes/shop');

// express does not process incoming requests thus we need to middleware to a parse incoming request body 
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine' , 'pug');
app.set('/views', 'views');

app.use('/admin',admin.routes);

app.use(shop);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(4000);
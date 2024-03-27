const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.DATABASE_URL ;

mongoose.connect(uri, {
        useNewUrlParser: true, 
        useUnifiedTopology: true 
        })
        .then(() => {
            console.log("Conneted To Mongodb Database");
        })
        .catch((err) => {
            console.log(err);
        });


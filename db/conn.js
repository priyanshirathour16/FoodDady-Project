require('dotenv').config();
const mongoose = require("mongoose");
const DB = process.env.DB;
mongoose.connect(DB , { useNewUrlParser: true,
    useUnifiedTopology: true,
    }) 
.then(()=> console.log("db connected"))
.catch((err)=> console.log(`db not connected ${err}`));
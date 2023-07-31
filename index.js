require("dotenv").config()
const express = require("express");
const app = express();
const port = process.env.PORT || 8800;
const foodSend = require("./defaultSend");
const router = require("./Routes/routes");
const path = require("path");
const cors = require("cors");
require("./db/conn");

app.use(cors());
// app.use((req, res , next)=>{
//     res.setHeader("Access-Control-Allow-Origin" , "http://localhost:3000");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin , X-Requested-With , Content-Type , Accept"
// )
// next();
// })

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(router);

app.get("/" , (req, res)=>{
     res.send("");
})

app.use(express.static(path.join(__dirname , "./mernapp/build")))
app.get("*" , function(_, res){
    res.sendFile(path.join(__dirname , "./mernapp/build/index.html") , function(err){
        res.status(500).send(err);
    })
})

app.listen(port , ()=>{
    console.log("Server is running")
})

foodSend();
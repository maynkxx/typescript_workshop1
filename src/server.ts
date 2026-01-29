const express = require('express');
import {App} from './app';

let app = new App(3000).app;
app = express();
// app.get('/',(req,res)=>{
//     res.send("server is runing");
// })

app.listen(3000,()=>{
    console.log("server is runing on port");
})


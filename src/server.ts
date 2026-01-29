const express = require('express');
const app = express();
// app.get('/',(req,res)=>{
//     res.send("server is runing");
// })

app.listen(3000,()=>{
    console.log("server is runing on port 3000");
})
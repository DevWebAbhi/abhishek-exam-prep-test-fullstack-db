const express = require("express")

const app = express();


app.get("/",(req,res)=>{
    res.send("This is backend");
})

app.listen(3131,()=>{
    console.log("server connected sucessfully");
})
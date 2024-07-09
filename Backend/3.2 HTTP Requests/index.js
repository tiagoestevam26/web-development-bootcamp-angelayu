import express from "express";
const app = express();
const port = 2000;

app.get("/", (req, res)=>{
    res.send("<h1>OI AMORRRRRR aauauau<h1>")
})

app.get("/about", (req, res)=>{
    res.send("<h1>OI AMORRRRRR saiba sobre mim<h1>")
})

app.get("/contact", (req, res)=>{
    res.send("<h1>OI AMORRRRRR contate eu!!<h1>")
})

app.listen(port, ()=>{
    console.log("Server running on port "+port+"!");
})


import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var posts = [];
var titles = [];
var cont =  0;



app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", { 
        postas: posts, 
        titulos: titles });
  });

app.post("/submit", (req, res) => {
    titles.push(req.body.title);
    posts.push(req.body.post);    
    res.render("index.ejs", { 
        postas: posts, 
        titulos: titles });
  });
  
 

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;
var name = "";
var title = "";

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  title = "Write your name below!!!"
  res.render("index.ejs", {
    title: title,
  });
});

app.post("/submit", (req,res)=>{
  name = req.body["fName"] + req.body["lName"];
  title = "Your name has "+name.length+" letters!!";
  res.render("index.ejs", {
    title: title,
  });
})

app.listen(port, () => { 
  console.log(`Server running on port ${port}`);
});

import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.use(express.static("public"));

app.post("/submit", (req,res)=>{
  
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
 
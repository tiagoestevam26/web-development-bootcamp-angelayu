import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var aux = false;

function tellMeASecret(req, res, next){
    if(req.body.password === "ILoveProgramming"){
        aux = true;
    }
    next();
}

app.use(bodyParser.urlencoded({ extended: true }));

app.use(tellMeASecret);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });

app.post("/check", (req,res)=> {
    if(aux == true){
    res.sendFile(__dirname + "/public/secret.html");
    }else{
    res.sendFile(__dirname + "/public/index.html");

    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
  
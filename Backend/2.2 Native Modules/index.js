const fs = require("fs");
/*
fs.writeFile("message.txt","AUAUAUAUAUAU",(err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });*/

  fs.readFile("message.txt", "utf8", (err, data) => { //utf8 é pra escrever em texto nao em buffer
    if (err) throw err;
    console.log(data);
  });
  
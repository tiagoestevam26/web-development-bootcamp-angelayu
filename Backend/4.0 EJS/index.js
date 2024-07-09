import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const weekday = new Date();
  const today = weekday.getDay();

  let type = "a weekday";
  let advicee = "let's work hard!!!";

  if (today === 0 || today === 6) {
    type = "a weekend";
    advicee = "let's relax!!!";
  }

  res.render("index.ejs", {
    day: type,
    advice: advicee,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

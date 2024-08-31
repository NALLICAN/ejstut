import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import ejs from "ejs";

const app = express();
const port = 3000;

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set the view engine to EJS
app.set("view engine", "ejs");

// Set the views directory to the location of your EJS files
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlcontent: "<strong>This is some strong text</strong>",
  };
  res.render("index", data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
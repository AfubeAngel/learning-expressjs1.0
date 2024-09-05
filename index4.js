import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3002;
let bandName = "";

app.use(bodyParser.urlencoded({ extended: true }));


//custom middleware to log the request body made in the simple html form
function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}


app.use(bandNameGenerator);
//response {} { street: 'big', pet: 'boy' } Hence bandName is given as "bigboy✌️"


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
//when a user visit localhost:3002, the index.html form in the public/index/html displays for the user to input streetName and petName


app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
});
//clicking the submit button calls the /submit; which returns "Your band name is: bigboy✌️"


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
//console log - Listening on port 3002

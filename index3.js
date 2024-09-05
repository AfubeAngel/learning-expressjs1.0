//practicing creating a custom middleware that serves as a logger
import express from "express";

const app = express();
const port = 3002;

function logger(req, res, next) {
  console.log('Request Type:', req.method);
  console.log('Request URL:', req.url);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

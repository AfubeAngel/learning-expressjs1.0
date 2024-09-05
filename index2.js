//praticing the five http requests (GET, POST, PUT, PATCH and DELETE) and calling them on POSTMAN
import express from "express";

const app = express();
const port = 3002;

app.get('/', (req, res) => {
  res.send("<h1>Hello World, this is from Express js!</h1>");
})

app.get('/about', (req, res) => {
  res.send("<h1>Hello World, this is about page!</h1>");
})

// Respond to POST request on the root route (/), the application’s home page:
app.post('/', (req, res) => {
  res.send('Got a POST request')
})

// Respond to a DELETE request to the /user route:
app.delete('/user', (req, res) => {
  res.sendStatus('200')
})

app.listen(port, () => {
  console.log(`This is the port running: ${port}`)
})


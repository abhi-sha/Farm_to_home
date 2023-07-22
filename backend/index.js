const express = require('express')
const app = express()
const port = 3001
const mongoDB=require('./db')
mongoDB()
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
app.use(express.json())
app.use('/api',require("./Route/CreateUser"));

app.use('/api',require("./Route/Displaydata"));
app.use('/api',require("./Route/OrderData"));
app.listen(port, () => {
  console.log(`\n Go the link : http://localhost:${port}\n`)
})
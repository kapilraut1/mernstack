const express = require("express");

const app = express();
const port = 3000;


app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/", (req, res) => {
    res.send("Hello World!1");
  });

 // app.get("/index", (req, res) => {
//res.sendFile('./templates/app.html', {root: __dirname});
  //});

app.get("/index1", (req, res) => {
    res.sendFile('./templates/app.html', {root: __dirname});
res.download|('./templates/hello.txt');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
const express = require("express");
const app = express();
const port = 3000;


app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/", (req, res) => {
    res.send("Hello World Post");
    console.log("Checking");
  });
  app.get("/index", (req, res) => {
    res.sendFile('./templates/app.html', {root: __dirname});
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

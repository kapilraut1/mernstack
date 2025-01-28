const express = require("express");
const blog = require('./routes/blog')
const app = express();
const port = 3000;

app.use('/blog', blog);
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

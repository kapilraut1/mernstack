const express = require('express')
const app = express()
const port = 3000

//using slug
app.get('/hello/:slug', (req, res) => {
  res.send(`Hello ${req.params.slug}`)
  console.log(req.params);
  console.log(req.query);
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
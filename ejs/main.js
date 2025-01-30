const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let siteName ="Addidas"
    let searchText= "Search Now"
    let arr=["The King is |Kapil Raut", "Age is 20 years old", "Profession is Web Developer"]
  res.render('index', {siteName: siteName, searchText: searchText, arr});
})
app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Addidas why and when?"
    let blogContent= "It is very nice"
  res.render('index', {blogTitle: blogTitle, blogContent: blogContent});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
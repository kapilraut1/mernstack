const express = require('express')
const app = express()


const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)
app.use((req,res, next)=>{
    console.log("hello");
    next()
})

const requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    console.log("time")
    next()
  }

  
  app.get('/', (req, res) => {
    let responseText = 'Hello World!<br>'
    responseText += `<small>Requested at: ${req.requestTime}</small>`
    res.send(responseText)
  })
  

app.listen(3000)


const express = require('express');
const router = express.Router();
// middleware that is specific to this router
const timeLog = (req, res, next) => {
  console.log('Time: ', Date.now())
  next()
}
router.use(timeLog)

// define the home page route
router.get('/blog', (req, res) => {
  res.send('Blog home page');
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})
router.get('/blog/:slug', (req, res) => {
    res.send(`The documents is ${req.params.slug}`);
  })

module.exports = router
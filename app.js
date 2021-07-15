// app.js
const express = require('express')
const exphbs = require('express-handlebars')
const moment = require('moment')
const { randomId, logRequestInfo, logResponseInfo } = require('./tools')
const app = express()
const port = 3000

// view engine setting
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')




app.use(function logMiddlewareInfo(req, res, next) {
  // handle request message
  const [requestLog, requestUnixTime] = logRequestInfo(req)
  console.log(requestLog)

  // handle server response message
  res.on('finish', () => {
    const responseLog = logResponseInfo(res, requestUnixTime)
    console.log(responseLog)
  })
  next()
})

app.get('/', (req, res) => {
  const id = randomId()
  res.render('index', { id })
})

app.get('/new', (req, res) => {
  const id = randomId()
  res.render('index', { id })
})

app.get('/:id', (req, res) => {
  const id = randomId()
  res.render('index', { id })
})

app.post('/', (req, res) => {
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`App running on http://localhost:3000`)
})
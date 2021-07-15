// app.js
const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const app = express()
const port = 3000

// view engine setting
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

let requestUnixTime


app.use(function logMiddlewareInfo(req, res, next) {
  // handle request message
  requestUnixTime = Date.now()
  const requestTime = new Date(requestUnixTime).toLocaleString('zh-TW')
  const method = req.method
  const url = req.originalUrl
  console.log(`${requestTime} | ${method} from ${url}`)

  // handle server response message
  res.on('finish', () => {
    const method = res.req.method
    const url = res.req.originalUrl
    const responseUnixTime = Date.now()
    const responseTime = new Date(responseUnixTime).toLocaleString('zh-TW')
    const handleDuration = responseUnixTime - requestUnixTime

    console.log(`${responseTime} | ${method} from ${url} | total time: ${handleDuration}ms`)
  })

  next()
})


app.get('/', (req, res) => {
  res.render('index')
})

app.get('/new', (req, res) => {
  res.render('index')
})

app.get('/:id', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`App running on http://localhost:3000`)
})
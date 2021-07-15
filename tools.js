const moment = require('moment')

const tools = {
  randomId: () => {
    return Math.floor(Math.random() * 100)
  },
  logRequestInfo: (req) => {
    let requestUnixTime = Date.now()
    const requestTime = moment(requestUnixTime).format('YYYY-MM-DD') + ' ' + new Date(requestUnixTime).toLocaleTimeString('zh-TW')
    const method = req.method
    const url = req.originalUrl
    const requestLog = `${requestTime} | ${method} from ${url}`
    return [requestLog, requestUnixTime]
  },
  logResponseInfo: (res, requestUnixTime) => {
    const method = res.req.method
    const url = res.req.originalUrl
    const responseUnixTime = Date.now()
    const responseTime = moment(requestUnixTime).format('YYYY-MM-DD') + ' ' + new Date(requestUnixTime).toLocaleTimeString('zh-TW')
    const handleDuration = responseUnixTime - requestUnixTime
    return `${responseTime} | ${method} from ${url} | total time: ${handleDuration}ms`
  }
}

module.exports = tools
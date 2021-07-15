const moment = require('moment')

const tools = {
  randomId: () => {
    return Math.floor(Math.random() * 100)
  },
  logRequestInfo: (req) => {
    let requestUnixTime = Date.now()
    const requestDate = moment(requestUnixTime).format('YYYY-MM-DD')
    const requestTime = new Date(requestUnixTime).toLocaleTimeString('zh-TW')
    const requestTimeLog = requestDate + ' ' + moment(requestTime, ["h:mm:ss A"]).format("HH:mm:ss")
    const method = req.method
    const url = req.originalUrl
    const requestLog = `${requestTimeLog} | ${method} from ${url}`
    return [requestLog, requestUnixTime]
  },
  logResponseInfo: (res, requestUnixTime) => {
    const method = res.req.method
    const url = res.req.originalUrl
    const responseUnixTime = Date.now()
    const responseDate = moment(responseUnixTime).format('YYYY-MM-DD')
    const responseTime = new Date(responseUnixTime).toLocaleTimeString('zh-TW')
    const responseTimeLog = responseDate + ' ' + moment(responseTime, ["h:mm:ss A"]).format("HH:mm:ss")
    const handleDuration = responseUnixTime - requestUnixTime
    return `${responseTimeLog} | ${method} from ${url} | total time: ${handleDuration}ms`
  }
}

module.exports = tools
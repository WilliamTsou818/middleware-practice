const moment = require('moment')

const tools = {
  randomId: () => {
    return Math.floor(Math.random() * 100)
  },
  logRequestInfo: (req) => {
    const requestUnixTime = Date.now()
    const requestTimeLog = moment(requestUnixTime).format('YYYY-MM-DD HH:mm:ss')
    const method = req.method
    const url = req.originalUrl
    const requestLog = `${requestTimeLog} | ${method} from ${url}`
    return [requestLog, requestUnixTime]
  },
  logResponseInfo: (res, requestUnixTime) => {
    const method = res.req.method
    const url = res.req.originalUrl
    const responseUnixTime = Date.now()
    const responseTimeLog = moment(responseUnixTime).format('YYYY-MM-DD HH:mm:ss')
    const handleDuration = responseUnixTime - requestUnixTime
    return `${responseTimeLog} | ${method} from ${url} | total time: ${handleDuration}ms`
  }
}

module.exports = tools

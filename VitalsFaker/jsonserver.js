const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('/workspace/base1/VitalsFaker/data3.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(8090, () => {
    console.log('JSON Server is running')
})
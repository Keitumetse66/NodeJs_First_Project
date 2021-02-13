/* create a http library to start the server*/
/* create a server that tells it to listen to a port*/

const http = require('http')
const port = 3000

const server = http.createServer(function(req,res) {


})

server.listen(port,function(error) {
    if (error) {
        console.log('something went wrong', error)
    } else {
        console.log('server listerning on port ' + port)
    }
})
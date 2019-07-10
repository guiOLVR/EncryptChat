const app   = require('./app');
const http  = require('http');
const debug = require('debug')('nodestr:server');

const port      = normalizePort(process.env.PORT || '3000');//define port for htpp connection(RECOMENDED USE PORT 80)

const server        = http.createServer(app);//call app.js for define with main of API

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

console.log('Server ON port: ' + port);

function normalizePort(val){
    const port = parseInt(val,10);

    if(isNaN(port)){
        return val;
    }
    
    if(port >= 0){
        return port;
    }
    return false;
}

function onError(error){
    if(error.syscall !== 'listen'){
        throw error;
    }
    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    switch(error.code){
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
        throw error;
    }
}

function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string' ?
        'Pipe ' + addr :
        'Port ' + addr.port;
    debug('Listening on' + bind);
}

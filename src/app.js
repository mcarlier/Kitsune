var http = require('http');
var fs = require('fs');
import { remote } from 'electron';
const app = remote.app;

import { browsing } from './browsing/browsing';
import { getStatus } from './browsing/browsing';
import { classe } from './classeManager/classeManager';
var classeManager = new classe;
browsing(app.getAppPath());

var server = http.createServer(function(req, res) {
    fs.readFile('./index.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {

    //classRoll
    socket.on('getStatus', function (message) {
      socket.emit('status', getStatus());
    });
    socket.on('displayClasses', function (message) {
      classeManager.displayClasses(app.getAppPath(),getStatus());
    });

    //Save classe
    socket.on('saveClasse', function (message) {
      classeManager.saveClasse(app.getAppPath());
    });

});
server.listen(8080);

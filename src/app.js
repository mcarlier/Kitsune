var http = require('http');
var fs = require('fs');
import { remote } from 'electron';
const app = remote.app;

import { browsing } from './browsing/browsing';
import { get } from './browsing/browsing';
import { database } from './dbManager/dbManager';
var db = new database(app.getAppPath());
browsing(app.getAppPath());

//$(".container").load(app.getAppPath()+"/app/app.html");


var server = http.createServer(function(req, res) {
    fs.readFile('./index.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
    if (req.method.toLowerCase() == 'get') {
        displayForm(res);
    } else if (req.method.toLowerCase() == 'post') {
        processAllFieldsOfTheForm(req, res);
    }

});

function displayForm(res) {
    fs.readFile('form.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
                'Content-Length': data.length
        });
        res.write(data);
        res.end();
    });
}

function processAllFieldsOfTheForm(req, res) {
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
        console.log(fields,files)
        //Store the data from the fields in your data store.
        //The data store could be a file or database or any other store based
        //on your application.
        res.writeHead(200, {
            'content-type': 'text/plain'
        });
        res.write('received the data:\n\n');
        res.end(util.inspect({
            fields: fields,
            files: files
        }));
    });
}

var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {

    //classRoll
    socket.on('get', function (message) {
      socket.emit('status', get(message));
    });

    socket.on('display', function (message) {
      switch(message) {
        case 'classes':
          db.displayClasses(get('status'));
          break;
        case 'students':
          db.displayStudents(get('classe'),get('status'));
          break;
      }
    });

    //Save classe
    // socket.on('saveClasse', function (message) {
    //   classeManager.saveClasse(app.getAppPath());
    // });

});
server.listen(8080);

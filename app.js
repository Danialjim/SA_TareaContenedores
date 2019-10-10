var express     = require('express');
var app         = express();
var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://db:27017/dockerdemo';
var db;

MongoClient.connect(url, function(err, database){
    if(err){console.log('Fallo la conexion: ' + err); return;}
    db = database;
    console.log("Software Avanzado, Tarea 8: Containers 1/2 ");
});

app.get('/', function(req, res){
    var Nombre = 'Carlos Daniel Alonzo Jimenez';
    var carnet = '201313982';

    var collection = db.collection('customers');
    var doc = {'Nombre':Nombre, 'carnet':carnet};
    
    collection.insert(doc, {w:1}, function(err, result){
        console.dir(result);
        res.send(result);
    });

    doc = {'Nombre':'Luis Figo', 'carnet':'202012345'};
    collection.insert(doc, {w:1}, function(err, result){
        console.dir(result);
        res.send(result);
    });

    doc = {'Nombre':'Rocky Balboa', 'carnet':'202078526'};
    collection.insert(doc, {w:1}, function(err, result){
        console.dir(result);
        res.send(result);
    });
});

app.get('/', function(req, res){
    var results = null;
    var collection = db
        .collection('customers')
        .find()
        .toArray(function(err, docs){
            console.dir(docs);
            res.send(docs);
        });
});
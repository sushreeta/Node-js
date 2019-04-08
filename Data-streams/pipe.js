var http = require('http');
var fs = require('fs');
var readStream = fs.createReadStream(__dirname+'/read.txt','utf8');
var writeStream = fs.createWriteStream(__dirname+'/wite_stream.txt');

readStream.pipe(writeStream);
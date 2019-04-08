var fs = require('fs');
//synchronously read and write
//var readme = fs.readFileSync('read.txt','utf8');
//console.log(readme);
//Synchronous write the file
//fs.writeFileSync('write_file',readme);

//Asynchronously read and write
fs.readFile('read.txt','utf8', function(err,data){
    console.log(data);
    //fs.writeFile('write.txt',data);
});
//console.log('test');
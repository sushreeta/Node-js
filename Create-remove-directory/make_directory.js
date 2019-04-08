var fs = require('fs');
//fs.mkdirSync('stuff');
//fs.rmdirSync('stuff');

/** fs.mkdir('stuff',function(){
    fs.readFile('read.txt','utf8',function(err,data){
            fs.writeFile('./stuff/write.txt',data);
    });
});
*/
fs.unlink('./stuff/write.txt',function(){
    fs.rmdir('stuff');
});
var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res){
    var filePath = process.argv[3];
    var fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
});
server.listen(process.argv[2]);
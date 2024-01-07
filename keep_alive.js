var http = require('http');
http.createServer(function (req, res) {
  res.write("bot is online now");
  res.end();
}).listen(8082);

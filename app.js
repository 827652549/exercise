var http = require('http');
http.createServer(function(request, response) {
  //	因为我们是利用script标签的src请求这个接口地址http://127.0.0.1:8081/，所以我们需要设置响应头为js格式
  response.writeHead(200, { 'Content-Type': 'application/javascript' });
  //然后返回js格式代码回去
  response.end('var a=1');
}).listen(8081);
console.log('Server running at http://127.0.0.1:8081/');

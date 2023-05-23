const http = require('http');
const server = http.createServer((req,res)=>{
if(req.url==='/'){
    res.write("Welocme Vishal");
    res.end();
}
if(req.url==='/api/numbers'){
    res.write(JSON.stringify([1,2,3,4]));
    res.end();
}
});

server.listen(3000);
console.log('Listening on port 3000');
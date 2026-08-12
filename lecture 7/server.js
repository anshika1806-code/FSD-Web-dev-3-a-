const http = require('http');
const users = [
    {id:1, name:'John',email:'john@example.com'},
    {id:2, name:'Jane',email:'jane@example.com'},
    {id:3, name:'Bob',email:'bob@example.com'}
];
const server= http.createServer((req,res)=>{
    //console.log(req.url);
    //console.log(req.method);
    if (req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>Welcome to the Home Page</h1>');
        res.end();
    } else if (req.url==='/about'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>Welcome to the About Page</h1>');
        res.end();

    } 
    else if (req.url==='/users'){
        res.writeHead(200,{'Content-Type':'application/json'});
        res.write(JSON.stringify(users));
        res.end();
    }
    else {
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write('<h1>Page Not Found</h1>');
        res.end();
    }

   // res.end('Hello from the server');
});
server.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});
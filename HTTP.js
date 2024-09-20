const http=require('http');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'text/html'});
    res.write(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #body-header {
            height: 30%;
            width: 100%;
            background-color: blue;
        }

        #body-main {
            height: 40%;
            width: 100%;
            background-color: white;
        }

        #body-footer {
            height: 30%;
            width: 100%;
            background-color: green;
        }
    </style>
</head>
<body>
    <header id="body-header">
        <h3>This is Header</h3>
    </header>
    <main id="body-main">
       <h4> THis is Main</h4>
    </main>
    <footer id="body-footer">
       <h5> THis is footer</h5>
    </footer>
</body>
</html>
`)
res.end();
});

server.listen(4657,()=>{
    console.log('Server running at link http://localhost:4657');
})
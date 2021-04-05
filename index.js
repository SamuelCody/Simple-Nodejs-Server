const http = require('http');
const PORT = 3000;

const server = http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain"});

    //A plain text containing any message
    res.end("Howdy!!, I'm a Backend Developer!");

    res.writeHead(200, { "Content-Type": "application/json"});

    //A JSON Object of my name, country and hobby
    res.end(`
        {
            "name": "Ayinde Samuel Ayomide",
            "country": "Nigeria",
            "hobby": "Watching Movies"
        }
    `);

    res.writeHead(200, { "Content-Type": "text/html"});

    //A webpage
    res.end(`
        <html>
           <head>
              <style>
                 body {
                     margin: 70px;
                     display: flex;
                     justify-content: center;
                     align-items: center;
                     flex-direction: column;
                     color: white;
                     background-color: #111;
                 }
                 .block__title {
                     width: 700px;
                     height: 200px;
                     display: flex;
                     align-items: center;
                     justify-content: center;
                     border-radius: 10px;
                     background-image: linear-gradient(#a02356, #004080);
                 }
                 h2 { margin-top: 50px; }
                 p { margin-top: 30px; }
              </style>
           </head>
           <body>
              <div class="block__title"><h1>Zuri Backend Task</h1></div>
              <h2>Ayinde Samuel Ayomide</h2>
              <p>Backend Developer</p>
           </body>
        </html>
    `);
});

server.listen(PORT, '127.0.0.1');

console.log(`server started on port: ${PORT}`);
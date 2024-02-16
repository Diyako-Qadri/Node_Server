const http = require('node:http');
const url = require('url');
const fs = require('fs');
const PORT = 9909;



http.createServer((req, res) => {
    res.writeHead(200, 'the response is OK');
    
    if(req.url === "/"){
        fs.readFile(`./index.html`, (err, data) => {
            res.end(data);
          });
    } else if (req.url.includes(`/action`)) {
      fs.readFile(`./routes/action.html`, (err, data) => {
        res.end(data);
      });
    } else if (req.url.includes(`/romantic`)) {
      fs.readFile(`./routes/romantic.html`, (err, data) => {
        res.end(data);
      });
    } else if (req.url.includes(`/drama`)) {
      fs.readFile(`./routes/drama.html`, (err, data) => {
        res.end(data);
      });
    } else if (req.url.includes(`/comedy`)) {
      fs.readFile(`./routes/comedy.html`, (err, data) => {
        res.end(data);
      });
    } else if (req.url.endsWith('.css')) {
      fs.readFile('./style/main.css', (err, data) => {
        res.end(data);
      });
    } 
    
    
    if(!req.url) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  })
  .listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
  });

const http = require('node:http');
const url = require('url');
const fs = require('fs');
const PORT = 3030;

http.createServer((req, res) => {
  res.writeHead(200, 'OK', {'Content-Type': 'text/html'});
  let parsedUrl = url.parse(req.url, true);
  let pathName = parsedUrl.pathname;

  if (pathName === '/') {
    if (parsedUrl.query.genres) {
      if ( parsedUrl.query.genres === "action") {
        fs.readFile(`./routes/action.html`, (err, data) => {
          if (err) throw err;
          res.end(data);
        });
      } else if (parsedUrl.query.genres === "romantic") {
        fs.readFile(`./routes/romantic.html`, (err, data) => {
          if (err) throw err;
          res.end(data);
        });
      } else if ( parsedUrl.query.genres === "drama") {
        fs.readFile(`./routes/drama.html`, (err, data) => {
          if (err) throw err;
          res.end(data);
        });
      } else if ( parsedUrl.query.genres === "comedy") {
        fs.readFile(`./routes/comedy.html`, (err, data) => {
          if (err) throw err;
          res.end(data);
        });
      } else {
        res.write('Not Found');
        res.end();
      }
    } else {
      fs.readFile(`./index.html`, (err, data) => {
        if (err) throw err;
        res.end(data);
      });
    }
  } else {
    res.write('Not Found');
    res.end();
  }
}).listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});






const http = require('http');
const PORT = 3000;
console.log(`Hello BackEnd console`); // console.log in the server without writing it everytime you access a port


// const server =
//   http.createServer((request, response) => {
//     response.write('Hello Ironhack!');
//     response.write('Hello Everyone!');
//     // make sure you restart node server.js when making changes
//     // stop the server with ctrl + c
//     // in console run node server.js
//     response.end();
//   });

// const server =
//   http.createServer((request, response) => {
//     console.log(`Someone has requested ${request.url}`);

//     if (request.url === '/') {
//       response.write('Hello Ironhack!');
//       response.end();
//     }
//     else {
//       response.statusCode = 404;
//       response.write('404 Page');
//       response.end();
//     }
//   });

const server =
  http.createServer((request, response) => {
    console.log(`Someone has requested ${request.url}`); // console logs to the server console
    
    if (request.url === '/') {
      response.write('Hello Ironhack!'); // console logs the browser console
      response.end();
    }
    else if (request.url === '/about') {
      response.write('<html><b><script>console.log(`Hello Frontend console`)</script>My name is Chris</b></html>');
      // in order to access frontend console, it needs to be written with inline html
      response.end();
    }
    else {
      response.statusCode = 404;
      response.write('404 Page');
      response.end();
    }
  });

  // **** Server Code ****
  // 100 Temp
  // 200 Success
  // 300 Redirect
  // 400 User error
  // 500 Server Error


server.listen(PORT);
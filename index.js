// const http = require('http');

// const requestHandler = (req, res) => {
//     if (req.url === '/hello') {
//         res.setHeader('Content-Type', 'text/json');
//         res.writeHead(200);
//         res.end('Hello from NodeJS!');
//       }
// };

// const PORT = 3000;
// const server = http.createServer(requestHandler);

// server.listen(PORT, () => {
//   console.log(`Server started in http://localhost:${PORT}`);
// });

const express = require('express');

const PORT = 3000;
const server = express();

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello Students!');
});

router.get('/movies', (req, res) => {
	const movies = ['Harry Potter', 'Titanic', 'Back to the Future'];
  res.send(movies);
});

server.use('/', router);

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
import http from "http";

const port = process.env.port || 3000;

const server = http.createServer((req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify({ message: 'Hello world' }));
});
server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
});

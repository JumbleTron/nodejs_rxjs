import http from "http";
import UserService from "./services/UserService";
import randomString from "./helpers/randomString";

const port = process.env.port || 3000;

const server = http.createServer((req, res) => {
	const userService = new UserService();
	userService.createUser(randomString())
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify({ users: userService.users }));
});
server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
});

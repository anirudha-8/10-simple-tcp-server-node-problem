const net = require("net");

const server = net.createServer((socket) => {
	socket.on("data", (data) => {
		socket.write(data);
	});
});

const port = 8080;

server.listen(port, () => {
	console.log(`Server is running at: http://localhost:${port}`);
});

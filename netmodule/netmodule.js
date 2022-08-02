const server = require('net').createServer();

server.on('connection', socket => {
	console.log('client connected');
	socket.write("Welcome new client!\n");

	socket.on('data', data=> {
		console.log(`Data is:`));
		socket.write('data is: ');
		socket.write(data,'utf-8');
	});

	socket.on('end',() => {
		console.log('Client is disconnected');
	});

})

server.listen(8000, ()=> console.log('Server Bound'));

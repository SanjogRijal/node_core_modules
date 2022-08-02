	const http = require('http');

class Server {
	constructor(port){
		this.port = port
		this.createServer = this.createServer.bind(this);
	}

	createServer() {
		return	http.createServer((request, response) => {
        		const { headers, method, url } = request;
        		let body = [];
        		request.on('error',(err)=>{
                		console.error(err);
        		}).on('data', (chunk) => {
        	       		body.push(chunk);
        		}).on('end', () => {
                		body = Buffer.concat(body);
        		});
        	response.writeHead(200, {
               	 	'Content-Type': 'application/json',
                	'X-Powered-By': 'bacon'
        	});
        	response.write('Server Running at Port ' + this.port);
			});
	}

	runServer(server) {
		this.createServer().listen(this.port);
	}

	provideServer() {

	}
}

module.exports = {Server}

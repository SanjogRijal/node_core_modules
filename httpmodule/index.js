const Server = require('./httpmodule')

let our_server = new Server.Server(8080);
our_server.createServer();
our_server.runServer();

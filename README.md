### About

React-chat-server is a simple web server, built with [node.js](https://nodejs.org/en/), [express](http://expressjs.com/pt-br/) and [socket-io](https://socket.io/) to allow multiple clients to connect on it and send chat messages to each other.

### The React-Chat

This repository is only the server side of the app. In order to fully understand it you should also see [react-chat](https://github.com/Trakton/react-chat).

### Running for Development

The webserver will be listening in the localhost:3000 on dev builds. In order to run it, you just have to:

1. Download and install [node.js](https://nodejs.org/en/)
1. Clone this repository
1. cd into the cloned folder
1. run 'npm install' in the shell
1. run 'node index.js'

The last command will start the server and get it ready to answer for client requests.

### Running for Production

This webserver is online and listening to client requests at [https://luthier-chat-server.herokuapp.com]([https://luthier-chat-server.herokuapp.com). 

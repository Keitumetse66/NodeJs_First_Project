# NodeJs: Simple HTTP Server
## Introduction
This documentation provides an explanation of the code provided, which is a simple Node.js HTTP server that serves an HTML file named index.html on port 3000. The server uses the built-in http and fs (file system) modules in Node.js to achieve this.

## Code Structure
The code consists of tree main sections:

### 1. Importing Required Modules:
```javascript
const http = require('http');
const fs = require('fs');
const port = 3000;
```
* Import the `http` module to create an HTTP server.
* Import the `fs` module to read the `index.html` file from the file system.
* Define the `port` variable to specify the port on which the server will listen.

### 2. Creating the HTTP Server:
```javascript
const server = http.createServer(function(req, res) {
  // Server logic
  });
```
* Create an HTTP server using the `http.createServer` method.
* The server takes a callback function with two parameters: `req` (request) and `res` (response). This function is called whenever a client makes a request to the server.

### 3. Handling Requests and Serving HTML:
```javascript
res.writeHead(200, { 'Content-Type': 'text/html' });
fs.readFile('index.html', function(error, data) {
  // File read and response logic
});
```
* Use `res.writeHead` to set the HTTP response status code to 200 (OK) and specify the content type as 'text/html'.
* Read the `index.html` file using `fs.readFile`. If an error occurs during file reading, a 404 response is sent; otherwise, the file's content is written to the response.

### 4. Listening on Port:
```javascript
server.listen(port, function(error) {
  // Server listening logic
});
```
* Start the server and make it listen on the specified `port` (in this case, 3000).
* A callback function is used to handle any errors that may occur during server startup and to log a success message when the server is successfully started.

## Usage
To use this code, follow these steps:

1. Ensure you have `Node.js` installed on your system.
2. Create an `index.html` file in the same directory as the code, or modify the file path in the code to point to your HTML file.
3. Save the code to a JavaScript file, e.g., `server.js`.
4. Open a terminal and navigate to the directory containing `server.js` and `index.html`.
5. Run the server using the following command:
```bash
node server.js
```
6. You should see a message in the terminal indicating that the server is listening on port 3000.
7. Open a web browser and visit `http://localhost:3000` to see your HTML file served by the Node.js server.

## Conclusion
This project provides a basic imlementation of of creating an HTTP server in Node.js and serving an HTML file.


const http = require("http");
const path = require("path");
const fs = require("fs");
const colors = require("colors");



// create a server 
http.createServer().listen(5050, ()=> {
    console.log(` The server is running on port5050`.bgGreen.black)
})
const http = require("http");
const path = require("path");
const fs = require("fs");
const colors = require("colors");
const dotenv = require("dotenv").config()

const PORT = process.env.SERVER_PORT

// create a server 
http.createServer().listen(PORT, ()=> {
    console.log(` The server is running on port${PORT}`.bgGreen.black)
})
// Importing body parser allows us to parse through JSON data and makes it available under the req.body as a property. This will allows us to access data coming from the client available as a property under the req.body (req.body.name)
import express from "express";
import db from "./db/db";
import bodyParser from "body-parser";
import router from "./routes/index.js";

//Set up express app
const app = express();

//Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

//Server port 
const PORT = 3000;

//Initializes the server 
app.listen(PORT, () => {
  console.log(`server is listening at http://localhost:${PORT}`);
});

// In this file we import express which we have already installed. This allows us to requests to the server with routes and endpoints. (see routes/index.js for)

//app.listen creates a web server for us , it takes two parameters, the first parameter is the port that we want our application to listen on. The second parameter is optional, it is a callback function of what should happen whrn the server gets created. Once the server has been created we can then access our endpoint '/api/v1/todos' from there. 90ws0---4ee34w;pq2p;;;
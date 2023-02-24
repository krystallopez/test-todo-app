import express from "express";
import db from "../db/db";
import todoController from "../todosController/todo";

const router = express.Router();

router.get('/api/v1/todos', todoController.getAllTodos); // GET all todos
router.get('/api/v1/todos/:id', todoController.getTodo); // GET todo by id
router.post('/api/v1/todos', todoController.createTodo); //POST new todo
router.put('/api/v1/todos/:id', todoController.updateTodo); // UPDATE todo
router.delete('/api/v1/todos/:id', todoController.deleteTodo); //DELETE todo

export default router;

// The routes that you see here make requests to the server with the route/endpoint provided as the first paramater(/api/v1/todos). The second parameter is a function(req, res) that runs everytime we hit that endpoint. 

// The function takes two parametrs which are req and res. The req object contains information about our request and the response contains information about the response and methods we can use to send information back to the client. 

// res.status(200) is used to send back the status of the request, 200 means okay and it indicates a successful request. Status codes are ways for client like web app or mobile app to check whether things wet wrong or not. If we receive the status code 404(which means not found), we don't need to check the payload because we know that nothing is coming that we are really interested in. 

// We use router.get as this is a method that is used to create a route handler for HTTP GET requests that match a particular path. The get() method is part of 'Express Router' object which allows you to create modular, mountable route handlers. 

// We use the instance methods that we created in todo.js that will allow us to use the callback functions to create a route handler to get to each specific endpoint. 

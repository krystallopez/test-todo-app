/* eslint-disable class-methods-use-this */
import db from "../db/db";


// This class will hold all of our getter methods, whenever we need to make use of any of the methods we will create a new instance of the class
class TodosController {
  getAllTodos(req, res) {
    return res.status(200).send({
      sucess: "true",
      message: "todos retrieved successfully",
      todos: db,
    });
  }

  getTodo(req, res) {
    const id = parseInt(req.params.id, 10);
    db.map((todo) => {
      if (todo.id === id) {
        return res.status(200).send({
          success: 'true',
          message: 'todo retrieved successfully', todo
        });
      }
    });
  }

  createTodo(req, res) {
    if (!req.body.title) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required',
      });
    } else if (!req.body.description) {
      return res.status(400).send({
        success: 'false',
        message: 'description is required',
      });
    }
    const todo = {
      id: db.length + 1,
      title: req.body.title,
      description: req.body.description,
    };
    db.push(todo);
    return res.status(201).send({
      success: 'true',
      message: 'todo added successfully',
      todo,
    });
  }

  updateTodo(req, res) {
    const id = parseInt(req.params.id, 10);
    let todoFound;
    let itemIndex;
    db.map((todo, index) => {
      if (todo.id === id) {
        todoFound = todo;
        itemIndex = index;
      }
    });

    if (!todoFound) {
      return res.status(404).send({
        success: 'false',
        message: 'todo not found',
      });
    }

    if (!req.body.title) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required',
      });
    } else if (!req.body.description) {
      return res.status(400).send({
        success: 'false',
        message: 'description is required',
      });
    }

    const newTodo = {
      id: todoFound.id,
      title: req.body.title || todoFound.title,
      description: req.body.description || todoFound.description,
    };

    db.splice(itemIndex, 1, newTodo);

    return res.status(201).send({
      success: 'true',
      message: 'todo added successfully',
      newTodo,
    });
  }

  deleteTodo(req, res) {
    const id = parseInt(req.params.id, 10);
    let todoFound;
    let itemIndex;
    db.map((todo, index) => {
      if (todo.id === id) {
        todoFound = todo;
        itemIndex = index;
      }
    });

    if (!todoFound) {
      return res.status(404).send({
        success: 'false',
        message: 'todo not found',
      });
    }
    db.splice(itemIndex, 1);

    return res.status(200).send({
      success: 'true',
      message: 'Todo deleted successfuly',
    });
  }
}

const todoController = new TodosController();
export default todoController;
// To use the methods of the class we created an instance of this class and export it.


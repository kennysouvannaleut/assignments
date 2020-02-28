const express = require('express');
const todoRoutes = express.Router();
const uuid = require('uuid/v4');

todoRoutes.use('/', (req, res, next) => {
    req.body = {            /* created todo */              
        name: 'Shopping',
        description: 'Shop for clothes',
        imageURL: 'http://www.randompage.com',
        completed: false,
        _id: uuid() 
    }
    next()
});

todoRoutes.route('/')
    .get((req, res, next) => {    /* retreived todos */     
        console.log('GET request was a success!');
        res.send(req.body)
        next()
    })
    .post((req, res, next) => {    /* added new todo */
        const todos = req.body;
        todos._id = uuid()
        res.send(`Successfully added todo with ID ${todos._id}`)
        next()
    });
    
todoRoutes.route('/:todoId')
    .get((req, res, next) => {      /* retreived single todo */
        const todoId = req.params.todoId;
        const foundItem = todos.find(obj => obj._id === todoId);
        res.send(foundItem)
        next()
    })
    .put((req, res, next) => {      /* updated single todo */
        const todoId = req.params.todoId;
        const updatedObject = req.body;
        const itemIndex = todos.findIndex(obj => obj._id === todoId);
        const updatedTodo = Object.assign(todos[itemIndex], updatedObject);
        res.send(updatedTodo)
        next()
    })
    .delete((req, res, next) => {   /* deleted single todo */
        const todoId = req.params.todoId;
        const itemIndex = todos.findIndex(obj => obj._id === todoId);
        todos.splice(itemIndex, 1)
        res.send('Successfully deleted todo')
        next()
    });

module.exports = todoRoutes;
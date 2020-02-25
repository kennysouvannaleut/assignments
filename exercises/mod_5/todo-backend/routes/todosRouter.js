const express = require('express');
const todosRouter = express.Router();
const uuid = require('uuid/v4');

todosRouter.use((req, res, next) => {
    req.body = 
    {                   
        name: 'Shopping',
        description: 'Shop for clothes',
        imageURL: 'http://wwww.myimage....',
        completed: false,
        _id: uuid() 
    }
    next();
});

todosRouter.route('/')
    .get((req, res, next) => {          /* retreive list of todos from DB */     
        console.log('GET request received!')
        res.send(req.body)
    })
    .post((req, res, next) => {         /* add todo item to list */
        const todos = req.body
        todos._id = uuid()
        res.send(`Successfully added ${todos.name} to the list!`)
        next();
    });

    
    todosRouter.route('/:todoId')
        .get((req, res) => {            /* retreive single todo item from list */
            const todoId = req.params.todoId
            const foundItem = todos.find(obj => obj._id === todoId)
            res.send(foundItem)
        })
        .put((req, res) => {            /* update single todo item from list */
            const todoId = req.params.todoId
            const updatedObject = req.body
            const itemIndex = todos.findIndex(obj => obj._id === todoId) 
            const updatedTodo = Onject.assign(todos[itemIndex], updatedObject)
            res.send(updatedTodo)
        })
        .delete((req, res) => {        /* delete single item from list */
            const todoId = req.params.todoId
            const itemIndex = todos.findIndex(obj => obj._id === todoId)
            todos.splice(itemIndex, 1)
            res.send(`Successfully deleted ${todos.name} from the todos list`)
        });

    // bountyRouter.route('/:bountyId')
//     .get((req, res) => {
//         res.send(`GET on /bounty/${req.params.bountyId} endpoint`);
//     })
//     .put((req, res) => {
//         res.send(`PUT on /bounty/${req.params.bountyId} endpoint`);
//     })
//     .delete((req, res) => {
//         res.send(`DELETE on /bounty/${req.params.bountyId} endpoint`);
// });

module.exports = todosRouter;
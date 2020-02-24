const express = require('express'); 
const inventoryRouter = express.Router();
const uuid = require('uuid/v4');

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
        id_: uuid()
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
        id_: uuid()
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
        id_: uuid()
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        id_: uuid()
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
        id_: uuid()
    },{
        name: "soup",
        type: "food",
        price: 300,
        id_: uuid()
    },{
        name: "flour",
        type: "food",
        price: 100,
        id_: uuid()
    }
]

inventoryRouter.get('/', (req, res) => {
    // console.log(req)
    res.send(inventoryItems)
})

inventoryRouter.get('/:itemId', (req, res) => {
    // console.log(req.params)
    const itemId = req.params.itemId;
    const foundItem = inventoryItems.find(obj => obj._id === itemId);
    res.send(foundItem)
})

inventoryRouter.get('/search/name', (req, res) => {
    // console.log(req.query)
    const name = req.query.name;
    const filteredItems = inventoryItems.filter(obj => obj.name === name);
    res.send(filteredItems)
})

module.exports = inventoryRouter;
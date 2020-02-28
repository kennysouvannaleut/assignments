const express = require('express'); 
const inventoryRoutes = express.Router();
const uuid = require('uuid/v4');

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
        _id: uuid()
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
        _id: uuid()
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
        _id: uuid()
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        _id: uuid()
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
        _id: uuid()
    },{
        name: "soup",
        type: "food",
        price: 300,
        _id: uuid()
    },{
        name: "flour",
        type: "food",
        price: 100,
        _id: uuid()
    }
];

inventoryRoutes.get('/', (req, res) => {
    console.log(req);
    res.send(inventoryItems)
});

inventoryRoutes.get('/:itemId', (req, res) => {
    console.log(req.params);
    const itemId = req.params.itemId;
    const foundItem = inventoryItems.find(obj => obj._id === itemId);
    res.send(foundItem)
});

inventoryRoutes.get('/search/name', (req, res) => {
    console.log(req.query);
    const name = req.query.name;
    const filteredItems = inventoryItems.filter(obj => obj.name === name);
    res.send(filteredItems)
});

module.exports = inventoryRoutes;
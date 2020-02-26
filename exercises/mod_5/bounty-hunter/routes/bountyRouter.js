const express = require('express');
const uuid = require('uuid/v4');
const bountyRouter = express.Router();

const bounties = [
    {
        firstName: 'Mini', 
        lastName: 'Me', 
        living: true, 
        bounty: 50000,
        type: 'Sith', 
        _id: uuid() 
    },
    {   
        firstName: 'Deadman', 
        lastName: 'Walking', 
        living: false, 
        bounty: 100, 
        type: 'Jedi', 
        _id: uuid() 
    },
    {
        firstName: 'Killer', 
        lastName: 'Instincts', 
        living: false, 
        bounty: 26000, 
        type: 'Sith', 
        _id: uuid()
    },
    {
        firstName: 'Cool', 
        lastName: 'Guy', 
        living: true, 
        bounty: 100000, 
        type: 'Jedi', 
        _id: uuid() 
    }
];

bountyRouter.route('/')
    .get((req, res) => {
        res.send(bounties);
    })
    .post((req, res) => {
        const newBounty = req.body;
        newBounty._id = uuid();
        bounties.push(newBounty);
        console.log(`${newBounty.firstName} has been added successfully!`);
        res.send(newBounty);
});

bountyRouter.route('/:bountyId')
    .get((req, res) => {
        const bountyId = req.params.bountyId;
        const foundBounty = bounties.filter(obj => obj._id === bountyId);
        res.send(foundBounty);
    })
    .put((req, res) => {
        const bountyId = req.params.bountyId;
        const updateObject = req.body;
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId);
        const updatedBounty = Object.assign(bounties[bountyIndex], updateObject);
        console.log(`${updatedBounty.firstName} has been updated successfully!`);
        res.send(updatedBounty);
    })
    .delete((req, res) => {
        const bountyId = req.params.bountyId;
        const bountyIndex = bounties.findIndex(obj => obj._id === bountyId);
        bounties.splice(bountyIndex, 1);
        res.send('Deleted successfully!');
});

module.exports = bountyRouter;
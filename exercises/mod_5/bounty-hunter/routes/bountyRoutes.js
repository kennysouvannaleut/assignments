const express = require('express');
const uuid = require('uuid/v4');
const bountyRouter = express.Router();

const bounties = [
    { firstName: 'Evil', lastName: 'K', living: true, bounty: 50000, type: 'Sith', _id: uuid() },
    { firstName: 'Killer', lastName: 'Instincts', living: false, bounty: 26000, type: 'Jedi', _id: uuid() }
];

bountyRouter.route('/')
    .get((req, res) => {
        res.status(200);
        res.send(bounties);
    })
    .post((req, res) => {
        const newBounty = req.body;
        newBounty._id = uuid();
        bounties.push(newBounty);
        console.log(`The item was created and assigned an ID ${ bountyId }`);
        res.status(200).res.send(newBounty);
});

bountyRouter.route('/:bountyId')
    .get((req, res, next) => {
        // console.log(req.params);
        const bountyId = req.params.bountyId;
        const foundBounty = bounties.find(bounty => bounty._id === bountyId);
        // console.log(foundBounty);
        if(!foundBounty) {
            const err = new Error(`The item with ID ${ bountyId } was not found.`);
            res.status(500);
            return next(err);
        }
        res.status(200).res.send(foundBounty);
    })
    .put((req, res) => {
        const bountyId = req.params.bountyId;
        const updateObject = req.body;
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId);
        const updatedBounty = Object.assign(bounties[bountyIndex], updateObject);
        console.log(`The item with ID ${ bountyId } was updated.`);
        res.status(201).res.send(updatedBounty);
    })
    .delete((req, res) => {
        const bountyId = req.params.bountyId;
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId);
        bounties.splice(bountyIndex, 1);
        res.status(200).res.send(`The item with ID ${ bountyId } was deleted.`);
});

module.exports = bountyRouter;
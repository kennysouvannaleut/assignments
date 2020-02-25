const express = require('express');
const bountyRouter = express.Router();
const uuid = require('uuid/v4');

const bounties = [
    {firstName: 'Mini', lastName: 'Me', living: 'true', bounty: '$5,000.00', type: 'Sith', _id: uuid() },
    {firstName: 'Deadman', lastName: 'Walking', living: 'false', bounty: '$100.00', type: 'Jedi', _id: uuid() },
    {firstName: 'Killer', lastName: 'Instincts', living: 'false', bounty: '$2,626.00', type: 'Sith', _id: uuid() },
    {firstName: 'Cool', lastName: 'Guy', living: 'true', bounty: '$100,000.00', type: 'Jedi', _id: uuid() }
];

bountyRouter.route('/')
    .get((req, res) => {
        res.send(bounties);
    })
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuid()
        bounties.push(newBounty)
        res.send(`${newBounty.firstName} has been added to the database!`);
});

bountyRouter.route('/:bountyId')
    .get((req, res) => {
        res.send(`GET on /bounty/${req.params.bountyId} endpoint`);
    })
    .put((req, res) => {
        res.send(`PUT on /bounty/${req.params.bountyId} endpoint`);
    })
    .delete((req, res) => {
        res.send(`DELETE on /bounty/${req.params.bountyId} endpoint`);
});

module.exports = bountyRouter;
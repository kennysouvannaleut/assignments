const express = require("express");
const bountyRouter = express.Router();
const uuid = require("uuid/v4");

const bounties = [
    {   
        FirstName: "Evil", 
        LastName: "K", 
        Living: "true", 
        BountyAmount: "5000", 
        Type: "Sith", 
        _id: uuid() 
    },
    {
        FirstName: "Dead", 
        LastName: "A", 
        Living: "false", 
        BountyAmount: "1000", 
        Type: "Jedi", 
        _id: uuid() 
    },
    {
        FirstName: "Killer", 
        LastName: "B", 
        Living: "false", 
        BountyAmount: "2626", 
        Type: "Sith", 
        _id: uuid() 
    },
    {
        FirstName: "Bad", 
        LastName: "T", 
        Living: "true", 
        BountyAmount: "100", 
        Type: "Jedi", 
        _id: uuid() 
    }
];

bountyRouter.route("/")
    .get((req, res) => {
        res.send(bounties);
    })
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuid()
        bounties.push(newBounty)
        res.send(`${newBounty.firstName} has been added to the database!`);
});

bountyRouter.route("/:bountyId")
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
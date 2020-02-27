const express = require('express');
const bountyRoutes = express.Router();
const Bounty = require('../models/bounty');

bountyRoutes.route('/')
    .get((req, res, next) => {
        Bounty.find((err, bounties) => {
            if(err) {
                res.status(500)
                return next(err)
            };
            return res.status(200).send(bounties)
        })
    })
    .post((req, res, next) => {
        const newBounty = new Bounty(req.body);
        newBounty.save((err, saveBounty) => {
            if(err) {
                res.status(500)
                return next(err)
            };
            return res.status(201).send(saveBounty)
        })
    });

bountyRoutes.route('/:bountyId')
    .get((req, res, next) => {
        Bounty.findOne({ _id: req.params.bountyId }, (err, foundBounty) => {
            if(err) {
                res.status(500)
                return next(err)
            };
            return res.status(200).send(foundBounty)
        })
    })
    .delete((req, res, next) => {
        Bounty.findOneAndDelete({ _id: req.params.bountyId }, (err, deletedBounty) => {
            if(err) {
                res.status(500)
                return next(err)
            };
            return res.status(200).send(deletedBounty)
        })
    })
    .put((req, res, next) => {
        Bounty.findOneAndUpdate(
            { _id: req.params.bountyId },
            (req.body),
            { new: true },
            (err, updatedBounty) => {
                if(err) {
                    res.status(500)
                    return next(err)
                };
                return res.status(201).send(updatedBounty)
            }
        )
    });

bountyRoutes.get('search/type', (req, res, next) => {
    Bounty.find({ type: req.query.type }, (err, bounties) => {
        if(err) {
            res.status(500)
            return next(err)
        };
        return res.status(200).send(bounties)
    })
});

module.exports = bountyRoutes;
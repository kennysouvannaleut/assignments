const express = require('express');
const inventoryRoutes = express.Router();
const Inventory = require('../models/inventory');

inventoryRoutes.route('/')
    .get((req, res, next) => {
        Inventory.find((err, inventories) => {
            if(err) {
                res.status(500)
                return next(err)
            };
            return res.status(200).send(inventories)
        })
    })
    .post((req, res, next) => {
        const newInventory = new Inventory(req.body);
        console.log(newInventory);
        newInventory.save((err, saveInventory) => {
            if(err) {
                res.status(500)
                return next(err)
            };
            return res.status(201).send(saveInventory)
        })
    });

inventoryRoutes.route('/:inventoryId')
    .get((req, res, next) => {
        Inventory.findOne({ _id: req.params.inventoryId }, (err, foundInventory) => {
            if(err) {
                res.status(500)
                return next(err)
            };
            return res.status(200).send(foundInventory)
        })
    })
    .delete((req, res, next) => {
        Inventory.findOneAndDelete({ _id: req.params.inventoryId }, (err, deletedInventory) => {
            if(err) {
                res.status(500)
                return next(err)
            };
            return res.status(200).send(deletedInventory)
        })
    })
    .put((req, res, next) => {
        Inventory.findOneAndUpdate(
            { _id: req.params.inventoryId },
            (req.body),
            { new: true },
            (err, updatedInventory) => {
                if(err) {
                    res.staus(500)
                    return next(err)
                };
                return res.status(201).send(updatedInventory)
            }
        )
    });

module.exports = inventoryRoutes;
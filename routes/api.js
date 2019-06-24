const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require( '../models/product');



// get all products
router.get('/products', function(req, res, next){
    Product.find({}).then(function(products){

        res.status(200).json({status: 200, data: products});
    });
});

// get product by Id
router.get('/product/:id', function (req, res, next) {
    Product.findOne({_id: req.params.id}).then(function (product) {
        res.status(200).json({status: 200, data: product});

    }).catch(next);
});

// create product
router.post('/product', function (req, res, next) {
    Product.create(req.body).then(function (product) {
        res.status(200).json({status: 200, data: product});

    });
});

// update product
router.put('/product/:id', function(req, res, next){
    Product.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}).then(function(product){
        res.status(200).json({status: 200, data: product});

    }).catch(next);
});

// remove product
router.delete('/product/:id', function (req, res, next) {
    Product.findByIdAndRemove({_id: req.params.id}).then(function (product) {
        res.status(200).json({status: 200, data: product});

    }).catch(next);
});



module.exports = router;
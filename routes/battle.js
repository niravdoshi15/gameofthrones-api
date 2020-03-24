var express = require('express')
var router = express.Router();

var Battle = require('../model/battles')
var bodyParser = require('body-parser')

router.get('/list', function (req, res) {
    Battle.find(function (err, docs) {
        if (err) res.json(err)
        else {
            var list = []
            docs.map(b => list.push(b.name))          
            res.json(list)
        }
    })
})

router.get('/count', function (req, res) {
    Battle.find(function (err, docs) {
        if (err) res.json(err)
        else {
            res.json(docs.length)
        }
    })
})

module.exports = router;
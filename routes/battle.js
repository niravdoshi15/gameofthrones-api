var express = require('express')
var router = express.Router();

var Battle = require('../model/battles')
var bodyParser = require('body-parser')

router.get('/list', function (req, res) {
    Battle.find(function (err, docs) {
        if (err) res.json(err)
        else {
            var list = doc.filter((b)=>b.name)            
            res.json(list)
        }
    })
})

module.exports = router;
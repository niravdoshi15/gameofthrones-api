var express = require('express')
var router = express.Router();

var Battle = require('../model/battles')
var bodyParser = require('body-parser')

router.get('/list', function (req, res) {
    Battle.find(function (err, docs) {
        if (err) res.json(err)
        else {
            var list = []
            docs.map(b => list.push(b.location))
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

// router.get('/search', async function (req, res) {
//     var result = []
//     searchQuery = ['attacker_king', 'defender_king']
//     for (let i = 0; i < searchQuery.length; i++) {
//         await Battle.find({ [searchQuery[i]]: req.query.king }, function (err, docs) {
//             if (err) res.json(err)
//             else {
//                 result.push(...docs)
//             }
//         })
//     }
//     res.json(result)
// })

router.get('/search', async function (req, res) {
    var result = []
    if (req.query.location && req.query.type) {
        await Battle.find({ $and: [{ $or: [{ 'attacker_king': req.query.king }, { 'defender_king': req.query.king }] }, { 'location': req.query.location || '' }, { 'battle_type': req.query.type || '' }] }, function (err, docs) {
            if (err) res.json(err)
            else {
                result.push(...docs)
            }
        })
    }
    else if (req.query.location && !req.query.type) {
        await Battle.find({ 'location': req.query.location }, function (err, docs) {
            if (err) res.json(err)
            else {
                result.push(...docs)
            }
        })
    }
    else if (req.query.king) {
        await Battle.find({ $or: [{ 'attacker_king': req.query.king }, { 'defender_king': req.query.king }] }, function (err, docs) {
            if (err) res.json(err)
            else {
                result.push(...docs)
            }
        })
    }
    res.json(result)
})

module.exports = router;
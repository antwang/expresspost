const express = require('express');
const router = express.Router();

let list = [
];

router.get('/list', function(req, res, next){
    res.send(list);
});
router.post('/save', function(req, res, next){
    res.send({
        name: req.body.name || null,
        gender: req.body.gender || null
    });
    console.log('you posted: Name: ' + req.body.name + ', age: ' + req.body.gender);
    list.push(req.body)
});
module.exports = router
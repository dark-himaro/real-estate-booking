var express = require('express');
var router = express.Router();
var db = require('./db')

router.post('/', async function(req, res, next) {
  console.log("req",req.body);
    var responseBody;
    await db(`SELECT * FROM realestatebooking.booking`)
    .then ((data) => {
        console.log(data.rows);
      responseBody = data.rows;
    })      
// console.log("response",responseBody);
//   res.sendStatus
    res.status(200).send(JSON.stringify(responseBody));    
});

module.exports = router;

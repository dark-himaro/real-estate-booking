var express = require('express');
var router = express.Router();
var db = require('./db')

router.post('/', async function(req, res, next) {
  console.log("req",req.body);
    var responseBody;
    if (req.body["user"] == "renter") {
    await db(`SELECT * FROM REALESTATEBOOKING.renter NATURAL JOIN REALESTATEBOOKING.address WHERE REALESTATEBOOKING.renter.email_id = '{${req.body["username"]}}'`)
    .then ((data) => {
      responseBody = data.rows[0];
    })      
  }
  else{
    await db(`SELECT * FROM REALESTATEBOOKING.agent NATURAL JOIN REALESTATEBOOKING.address WHERE REALESTATEBOOKING.agent.email_id = '{${req.body["username"]}}'`)
    .then ((data) => {
      console.log("rows",data.rows);
      responseBody = data.rows[0];
    })

  }
// console.log("response",responseBody);
//   res.sendStatus
    res.status(200).send(JSON.stringify(responseBody));    
});

module.exports = router;

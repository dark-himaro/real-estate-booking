var express = require('express');
var router = express.Router();
var db = require('./db')

router.post('/', async function(req, res, next) {
    var responseBody = {};
    await db(`SELECT * FROM REALESTATEBOOKING.property NATURAL JOIN REALESTATEBOOKING.neighborhood NATURAL JOIN REALESTATEBOOKING.property_info NATURAL JOIN REALESTATEBOOKING.additional_property_info NATURAL JOIN REALESTATEBOOKING.houses`)
    .then ((data) => {
        console.log(data.rows)
      responseBody["houses"] = data.rows;
    })
    await db(`SELECT * FROM REALESTATEBOOKING.property NATURAL JOIN REALESTATEBOOKING.neighborhood NATURAL JOIN REALESTATEBOOKING.property_info NATURAL JOIN REALESTATEBOOKING.additional_property_info NATURAL JOIN REALESTATEBOOKING.apartment`)
    .then ((data) => {
        console.log(data.rows)
        responseBody["apartment"] = data.rows;
    })
    await db(`SELECT * FROM REALESTATEBOOKING.property NATURAL JOIN REALESTATEBOOKING.neighborhood NATURAL JOIN REALESTATEBOOKING.property_info NATURAL JOIN REALESTATEBOOKING.additional_property_info NATURAL JOIN REALESTATEBOOKING.commercial_building`)
    .then ((data) => {
        console.log(data.rows)
        responseBody["commercial_building"] = data.rows;
 })
    console.log("responseBody",responseBody);
    res.status(200).send(JSON.stringify(responseBody));  
});

module.exports = router;

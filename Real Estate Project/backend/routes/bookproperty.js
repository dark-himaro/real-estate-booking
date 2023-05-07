var express = require('express');
var router = express.Router();
var db = require('./db')

router.post('/', async function(req, res, next) {

    var responseData = 500;
    console.log(req.body);
    await db(`SELECT * FROM REALESTATEBOOKING.credit_card WHERE REALESTATEBOOKING.credit_card.credit_card_no = ${req.body.credit_card_no}`)
    .then (async (data) => {
        console.log("dtaa",data.rows.length);
        if(data.rows.length == 0)
        {           
            await db(`INSERT INTO realestatebooking.credit_card(
                credit_card_no, email_id, expiry_date)
             VALUES (${req.body["credit_card_no"]},'{${req.body["email"]}}','{${req.body["expiry_date"]}}')`)  
        }
    })
    await db(`INSERT INTO realestatebooking.booking(
        booking_id, email_id, property_id, credit_card_no)
     VALUES ('{${req.body["booking_id"]}}','{${req.body["email"]}}','{${req.body["property_id"]}}',${req.body["credit_card_no"]})`)
    res.status(200).send(JSON.stringify("booking added"));
 
});
function searchUser(users,username,user) {
    var isFound = false;
    users.map((person) => {
        if(person["username"][0] == username && person["user"] == user)
        {
            isFound = true;
        }

    })
    return isFound;
}

module.exports = router;


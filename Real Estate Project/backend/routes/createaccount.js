var express = require('express');
var router = express.Router();
var db = require('./db')
// var mysql = require('mysql');
// var pool  = mysql.createPool({
//     host     : 'real-estate.cobnlzopusig.us-east-2.rds.amazonaws.com',
//     user     : 'admin',
//     password : 'Django#420',
//     database : 'real_estate'
//     });
/* GET users listing. */
router.post('/', async function(req, res, next) {

    var responseData = 500;
    await db(`SELECT * FROM REALESTATEBOOKING.ACCOUNTS`)
    .then ((data) => {
        
        if(searchUser(data.rows,req.body["email"],req.body["user"]))
        {           
            responseData = 200
        }
    })

//   res.sendStatus
if (responseData == 200) {
    res.status(500).send(JSON.stringify("user already exists"));
}
else {
    console.log(req.body);
    if (req.body["user"] == "renter") {
        await db(`INSERT INTO REALESTATEBOOKING.renter(email_id,name,move_in_date,preferred_location, budget, contact)
            VALUES ('{${req.body["email"]}}','{${req.body["name"]}}','{${req.body["date"]}}','{${req.body["location"]}}','${req.body["budget"]}', '{${req.body["phone"]}}')`)
        
    }
    else{
        await db(`INSERT INTO REALESTATEBOOKING.agent(email_id, name, job_title, contact)
            VALUES ('{${req.body["email"]}}', '{${req.body["name"]}}','{${req.body["job"]}}','{${req.body["phone"]}}')`);

    }
    await db (`INSERT INTO REALESTATEBOOKING.address(email_id, building_number, street, city, state, zipcode)VALUES ('{${req.body["email"]}}', '{${req.body["building"]}}', '{${req.body["street"]}}', '{${req.body["city"]}}', '{${req.body["state"]}}', '{${req.body["zipcode"]}}');`)
    await db(`INSERT INTO REALESTATEBOOKING.accounts(username, password, "user")VALUES('{${req.body["email"]}}', '{${req.body["password"]}}', '{${req.body["user"]}}')`);
    res.status(200).send(JSON.stringify("user created successfully"));
    
}
 
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


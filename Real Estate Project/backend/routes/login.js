var express = require('express');
var router = express.Router();
var db = require('./db')

router.post('/', async function(req, res, next) {
    console.log("jnegv",req.body);
    var responseData = 500;
    await db(`SELECT * FROM REALESTATEBOOKING.ACCOUNTS`)
    .then ((data) => {
        console.log(req.body["username"],req.body["password"]);
        if(searchUser(data.rows,req.body["username"],req.body["password"],req.body["user"]))
        {
            responseData = 200
        }
    })

//   res.sendStatus
if (responseData == 200) {
    res.status(200).send(JSON.stringify("login successful"));  
}
else {
    res.status(500).send(JSON.stringify("user not found"));
}
  
});

module.exports = router;

function searchUser(users,username,password,user) {
    var isFound = false;
   
    users.map((person) => {
        if(person["username"][0] == username && person["password"][0] == password && person["user"] == user)
        {
            isFound = true;
        }

    })
    return isFound;
}
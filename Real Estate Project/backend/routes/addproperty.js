var express = require('express');
var router = express.Router();
var db = require('./db')

/* GET users listing. */
router.post('/', async function(req, res, next) {
    console.log(req.body);
    await db(`INSERT INTO realestatebooking.property(property_id, type, location, description, city, state)
    VALUES (
        '{${req.body["property_id"]}}',
        '{${req.body["type"]}}',
        '{${req.body["location"]}}',
        '{${req.body["description"]}}', 
        '{${req.body["city"].toLowerCase()}}',
        '{${req.body["state"].toLowerCase()}}')`)


        await db(`INSERT INTO realestatebooking.property_info(
            property_id, address, price, availability)
    VALUES (
        '{${req.body["property_id"]}}',
        '{${req.body["location"]+","+req.body["city"]+","+req.body["state"]}}',
        ${req.body["price"]},
        ${req.body["availability"]})`)


        await db(`INSERT INTO realestatebooking.additional_property_info(
            property_id, neighborhood, crime_rates, nearby_schools)
    VALUES (
        '{${req.body["property_id"]}}',
        '{${req.body["neighborhood"]}}',
        ${req.body["crime_rates"]},
        '{${req.body["nearby_schools"]}}')`)


        await db(`INSERT INTO realestatebooking.neighborhood(
            property_id, vacation_homes, land)
    VALUES (
        '{${req.body["property_id"]}}',
        '{${req.body["vacation_homes"]}}',
        '{${req.body["land"]}}')`);


    if (req.body["type"] == "house") {  
        await db(`INSERT INTO realestatebooking.houses(
            property_id, square_footage, no_of_rooms)
        VALUES (
            '{${req.body["property_id"]}}',
            ${req.body["square_footage"]},
            ${req.body["no_of_rooms"]})`)
    }
    else if (req.body["type"] == "apartment"){
        await db(`INSERT INTO realestatebooking.apartment(
            property_id, square_footage, no_of_rooms, building_type)
        VALUES (
            '{${req.body["property_id"]}}',
            ${req.body["square_footage"]},
            ${req.body["no_of_rooms"]},
            '{${req.body["building_type"]}}')`)
    }
    else if (req.body["type"] == "commercial building")
    {
        await db(`INSERT INTO realestatebooking.commercial_building(
            property_id, square_footage, type_of_business)
        VALUES (
            '{${req.body["property_id"]}}',
            ${req.body["square_footage"]},
            '{${req.body["type_of_business"]}}')`)
    }

    // else{
    //     await db(`INSERT INTO public.agents(agent_email, agent_name, job_title, contact)
    //         VALUES ('{${req.body["email"]}}', '{${req.body["name"]}}','{${req.body["job"]}}','{${req.body["phone"]}}')`);

    // }
    // await db (`INSERT INTO public.address(email_id, building, street, city, state, zipcode)VALUES ('{${req.body["email"]}}', '{${req.body["building"]}}', '{${req.body["street"]}}', '{${req.body["city"]}}', '{${req.body["state"]}}', '{${req.body["zipcode"]}}');`)
    // await db(`INSERT INTO public.acccounts(username, password, "user")VALUES('{${req.body["email"]}}', '{${req.body["password"]}}', '{${req.body["user"]}}')`);
    res.status(200).send(JSON.stringify("user created successfully"));
    
 
});

module.exports = router;


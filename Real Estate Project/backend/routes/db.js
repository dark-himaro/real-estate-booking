var express = require('express');
const { Client } = require('pg')
 
const client = new Client({
  host: 'localhost',
  port: 5432,
  database: 'real_estate',
  user: 'postgres',
  password: 'admin',
})
client.connect().then((msg) => {
  console.log("msg",msg);
})
const db = async (params) =>{
    var data;
    await client
    .query(params)
    .then((result) => data = result)
    .catch((e) => console.error(e.stack))
    return data;
}
module.exports = db;
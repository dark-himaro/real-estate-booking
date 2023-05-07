import axios from 'axios';
//const axios = require('axios'); // legacy way
export const LoginApi = async (params) => {
  var returnData;
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:3000/login',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : JSON.stringify(params)
    };
    
    await axios.request(config)
    .then((response) => {

      returnData =  {
        statusCode : response.status,
      data : response.data}
        ;
    })
    .catch((error) => {
      returnData =  {
        statusCode : error.response.status,
      data : error.response.data}
        ;
    });
    return returnData;
    
    
}
export const bookProperty = async (params) => {
  console.log("papr",params);
  var returnData;
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:3000/book-property',
    headers: { 
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(params)
  };
  
  await axios.request(config)
  .then((response) => {
    console.log("RES",response);
    returnData =  {
      statusCode : response.status,
    data : response.data}
      ;
  })
  .catch((error) => {
    returnData =  {
      statusCode : error.response.status,
    data : error.response.data}
      ;
  });
  return returnData;
}
export const getBooking = async (params) => {
  var returnData;
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:3000/get-booking',
    headers: { 
      'Content-Type': 'application/json'
    },
  };
  
  await axios.request(config)
  .then((response) => {
    returnData =  {
      statusCode : response.status,
    data : response.data}
      ;
  })
  .catch((error) => {
    returnData =  {
      statusCode : error.response.status,
    data : error.response.data}
      ;
  });
  return returnData;
}

export const getProperty = async (params) => {
  var returnData;
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:3000/get-property',
    headers: { 
      'Content-Type': 'application/json'
    },
  };
  
  await axios.request(config)
  .then((response) => {
    returnData =  {
      statusCode : response.status,
    data : response.data}
      ;
  })
  .catch((error) => {
    returnData =  {
      statusCode : error.response.status,
    data : error.response.data}
      ;
  });
  return returnData;
}
export const addProperty = async (params) => {
  var returnData;
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:3000/add-property',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : JSON.stringify(params)
  };
  
  await axios.request(config)
  .then((response) => {
    returnData =  {
      statusCode : response.status,
    data : response.data}
      ;
  })
  .catch((error) => {
    returnData =  {
      statusCode : error.response.status,
    data : error.response.data}
      ;
  });
  return returnData;
}

export const getUserDetails = async (params) => {
  var returnData;
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:3000/user-details',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : JSON.stringify(params)
  };
  
  await axios.request(config)
  .then((response) => {
    returnData =  {
      statusCode : response.status,
    data : response.data}
      ;
  })
  .catch((error) => {
    returnData =  {
      statusCode : error.response.status,
    data : error.response.data}
      ;
  });
  return returnData;
}

export const CreateAccountApi = async (params) => {
  var returnData;
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:3000/create-account',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : JSON.stringify(params)
  };
  
  await axios.request(config)
  .then((response) => {
    returnData =  {
      statusCode : response.status,
    data : response.data}
      ;
  })
  .catch((error) => {
    returnData =  {
      statusCode : error.response.status,
    data : error.response.data}
      ;
  });
  return returnData;
}


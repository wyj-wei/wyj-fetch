const fetch = require("node-fetch");

//get
module.exports.get = async url => {
  const response = await fetch(url);
  const resData = await response.json();
  //   console.log(url);
  return resData;
};

//post
module.exports.post = async (url, data) => {
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(data)
  });
  const resData = await response.json();
  //   console.log(url);
  return resData;
};

//put
module.exports.put = async (url, data) => {
    const response = await fetch(url, {
      method: "put",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    //   console.log(url);
    return resData;
  };
  
//delete
module.exports.delete = async (url) => {
    const response = await fetch(url, {
      method: "delete",
      headers: {
        "Content-type": "application/json"
      },
    });
    const resData = await "delete ok";
    //   console.log(url);
    return resData;
  };
  

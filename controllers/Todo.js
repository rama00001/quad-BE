var http = require("http");
const request = require('request');


const getTodos = (req, res) => {
  const requestOptions = {
    url: 'https://api.wazirx.com/api/v2/tickers',
    method: 'GET',
    json: {},
    qs: {
      offset: 20
    }
  };
  request(requestOptions, (err, response, body) => {
    if (err) {
      console.log(err);
    } else if (response.statusCode === 200) {
      let newData = {}
      let count = 0;
      for (let [key, value] of Object.entries(body)) {
        newData[key] = value;
        count++;
        if (count >= 10) break;
      }
      res.json(newData);

    } else {
      console.log(response.statusCode);
    }
  });
}
module.exports = {
  getTodos
};
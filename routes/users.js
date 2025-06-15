var express = require('express');
var router = express.Router();
var axios = require('axios'); // Add this line

/* GET users listing. */
router.get('/', async function(req, res, next) {
  // Example axios usage
  // const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  // res.json(response.data);
  res.send('respond with a resource');
});

module.exports = router;

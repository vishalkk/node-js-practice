const log = require('./logger');
// log("Good morning vishal )(:(");

//path module provided by node
const path = require('path');
var pathObj = path.parse(__filename);

console.log(pathObj);
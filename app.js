const log = require('./logger');
// log("Good morning vishal )(:(");

//path module provided by node
const path = require('path');
var pathObj = path.parse(__filename);

// console.log(pathObj);

///Os module

const os =require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();


// console.log(`total memory:${totalMemory}`);

// console.log(`free memory:${freeMemory}`);

//file system module
const fs = require('fs');

fs.readdir('./',function(err,res){
    console.log('result',res);
    console.log('error',err);

});


///Event module

const EventEmitter =require('events');

const emmiter = new EventEmitter();


const Logger =new require('./logger');
const logger = new Logger();

//listen the event
logger.on('messageLogged',(event)=>{
    console.log(`user  ${event.username} logged in`);
});

logger.log('message');
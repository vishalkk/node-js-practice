const { EventEmitter } = require("stream");

console.log(__filename);
console.log(__dirname);
var url = 'http://vishalkk.com';

class Logger extends EventEmitter{

    log(message){

        //send http request
        console.log(message);
        //product event
        this.emit('messageLogged',{id:1,username:"Vishal"});
    }
}


module.exports =Logger;
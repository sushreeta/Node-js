var events = require('events');

var myEmitter = new events.EventEmitter();

myEmitter.on('someevent', function(mssg){
console.log(mssg);
})

myEmitter.emit('someevent', 'the event emitted');

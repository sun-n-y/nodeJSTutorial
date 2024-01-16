const EventEmitter = require('events');

//create instance from event module
const customEmitter = new EventEmitter();

//name of event
//when this event takes place we do something
customEmitter.on('response', (name) => {
  console.log(`data received ${name}`);
});

customEmitter.on('response', (name, number) => {
  console.log(`some other logic here ${number} `);
});

//emit "response" event,
customEmitter.emit('response', 'sunny', 17);

//order matters on before emit

const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
  console.log(`data received user ${name}, with id: ${id}`);
});

customEmitter.on('response', () => {
  console.log(`some other logic here `);
});
// The order of the emit matters, we can only emit events that we are listening
// to. If we switch the ordering of the .emit() call then nothing will be logged
// in the console
customEmitter.emit('response', 'Cameron', 1997);

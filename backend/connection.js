const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/voyagerwebs`);

const objectbd = mongoose.connection;

objectbd.on('connected', () => {
  console.log('eeeeaaaaa weba weba');
});

objectbd.on('error', (error) => {
  console.log('un garrón amigo:', error);
});

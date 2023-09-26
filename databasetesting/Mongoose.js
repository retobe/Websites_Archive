const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://shelby123:IshaNTKmfCVGnqBU@phoenix.e98oa.mongodb.net/test', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to Mongoose!")
});
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/scribe');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connection open!');
});

// // Mongoose Docs --->
//
var charSchema = mongoose.Schema({
    name: String
});

var Character = mongoose.model('Character', charSchema);

var bmoney = new Character({ name: 'B-Money' });
console.log(bmoney.name); // 'B-Money'
//
// // <--- Mongoose Docs

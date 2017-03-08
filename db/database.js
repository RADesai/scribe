const mongoose = require('mongoose');
let db = 'mongodb://localhost/scribe';

mongoose.connect(db, (err, res) => {
  if (err) {
    console.log('Failed to connect to ' + db);
  } else {
    console.log('Connected to ' + db);
  }
});

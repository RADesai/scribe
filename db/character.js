const mongoose = require('mongoose');

// Character Schema

const charSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

const Character = mongoose.model('Character', charSchema);

module.exports.Character = Character;

// Create Character
module.exports.createCharacter = (name, cb) => {
  Character.create(name, cb);
}

// Get All Characters
module.exports.getCharacters = (cb, limit) => {
	Character.find(cb).limit(limit);
}

// Get Character
module.exports.getCharacter = (query, cb) => {
  Character.findOne(query, cb);
}

// Update Character
module.exports.updateCharacter = (id, name, options, cb) => {
	var query = {_id: id};
	var update = {
		name: name
	}
	Character.findOneAndUpdate(query, update, options, cb);
}

// Delete Character
module.exports.removeCharacter = (id, cb) => {
	var query = {_id: id};
	Character.remove(query, cb);
}

const db = require('../../db/database');
const Character = require('../../db/character');

module.exports = {
  // Controller Methods
  createCharacter: function(req, res) {
    console.log('REQ.body in Controller:', req.body);
    let char = {
      name: req.body.name
    };
    Character.createCharacter(char, (error, response) => {
      if (error) {
        console.log('Failed to create character');
        res.send(error);
      } else {
        console.log('Successfully created character:');
        console.log(response);
        res.status(201).send(response);
      }
    });
  },
  getCharacters: function(req, res) {
    Character.getCharacters((error, response) => {
      if (error) {
        console.log('Failed to find characters');
        res.send(error);
      } else {
        console.log('Successfully found characters:');
        res.status(200).send(response);
      }
    });
  },
  getCharacter: function(req, res) {
    // Searching with the character_id
    let query = {
      _id: req.params.id
    };
    Character.getCharacter(query, (error, response) => {
      if (error) {
        console.log('Failed to find character');
        res.send(error);
      } else {
        console.log('Successfully found character:');
        console.log(response);
        res.status(200).send(response);
      }
    });
  },
  updateCharacter: function(req, res) {
    // let update = {
    //   _id: req.params.id,
    //   note: req.body.note,
    //   tag: req.body.tag
    // };
    let query = {
      _id: req.params.id,
      note: 'test note'
    };
    Character.updateCharacter(query._id, query.note, (error, response) => {
      if (error) {
        console.log(error);
        res.send(error);
      } else {
        console.log('Successfully Updated!');
        console.log(response);
        res.status(204);
      }
    });
  }
};

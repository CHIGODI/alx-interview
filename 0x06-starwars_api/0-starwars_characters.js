#!/usr/bin/node

const request = require('request');

const movieID = process.argv[2];

request(`https://swapi-api.alx-tools.com/api/films/${movieID}`, function (error, response, body) {
  if (error) {
    console.error('Error fetching character:', error);
    return;
  }
  const films = JSON.parse(body);
  const characters = films.characters;

  characters.forEach(character => {
    request(character, function (error, res, body) {
      if (error) {
        console.error('Error fetching character:', error);
        return;
      }
      const character = JSON.parse(body);
      console.log(character.name);
    });
  });
});

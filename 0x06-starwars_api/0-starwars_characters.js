#!/usr/bin/node

const request = require('request');
const axios = require('axios');

const movieID = process.argv[2];

request(`https://swapi-api.alx-tools.com/api/films/${movieID}/`,
  function (error, response, body) {
    if (error) {
      console.error('Error fetching film data:', error);
      return;
    }
    const film = JSON.parse(body);
    const characters = film.characters;

    characters.forEach(character => {
      async function getCharacter () {
        try {
          const response = await axios.get(character);
          console.log(response.data.name);
        } catch (error) {
          console.error('Error fetching character:', error);
        }
      }
      getCharacter();
    });
  });

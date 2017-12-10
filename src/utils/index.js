const marvelURL = 'http://gateway.marvel.com/v1/public/characters';

export const getCharacters = (characters, name) => {
  return fetch(`${marvelURL}?limit=40${name ? `&nameStartsWith=${name}` : ''}&offset=${characters.length}&apikey=${process.env.REACT_APP_MARVEL}`)
    .then(res => res.json())
    .then(data => {
      const newCharacters = data.data.results;

      for(let i=0; i<newCharacters.length; i++) {
        characters.push(newCharacters[i]);
      }

      return characters;
    });
};

export const getCharacter = (id) => {
  return fetch(`${marvelURL}/${id}?apikey=${process.env.REACT_APP_MARVEL}`)
    .then(res => res.json())
    .then(data => {
      return data;
    });
};

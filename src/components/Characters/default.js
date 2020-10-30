import React, { useEffect, useState } from 'react';
import './characters.css';

import Character from './CardCharacter/CardCharacter';
const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [hasErrors, setHasErrors] = useState(false);

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    const url = 'https://rickandmortyapi.com/api/character/';
    fetch(url)
      .then((res) => res.json())
      .then((res) => setCharacters(res.results))
      .catch(() => setHasErrors(true));
  }, []);

  return (
    <div className="py-20 px-8">
      <h1 className="text-3xl uppercase">List of Characters</h1>
      <div className="flex flex-wrap">
        {characters.map((character) => {
          return (
            <Character
              img={character.image}
              species={character.species}
              status={character.status}
              type={character.type}
              index={character.index}
              name={character.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Characters;

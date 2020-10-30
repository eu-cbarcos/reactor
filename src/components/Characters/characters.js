import React from 'react';
import './characters.css';

import Character from './CardCharacter/CardCharacter';
class Characters extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      hasErrors: false,
    };
  }

  componentDidMount() {
    const url = 'https://rickandmortyapi.com/api/character/';
    fetch(url)
      .then((res) => res.json())
      .then((res) => this.setState({ characters: res.results }))
      .catch(() => this.setState({ hasErrors: true }));
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="py-20 px-8">
        <h1 className="text-3xl uppercase">List of Characters</h1>
        <div className="flex flex-wrap">
          {characters.map((character, index) => {
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
  }
}

export default Characters;

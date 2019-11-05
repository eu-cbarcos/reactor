import React from "react";
import "./characters.css";

import Character from "./CardCharacter/CardCharacter";
class Characters extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      hasErrors: false
    };
  }

  componentDidMount() {
    const url = "https://rickandmortyapi.com/api/character/";
    fetch(url)
      .then(res => res.json())
      .then(res => this.setState({ characters: res.results }))
      .catch(() => this.setState({ hasErrors: true }));
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <h1>List of Characters</h1>
        <div className="containers-characters">
          <ul className="ul-characters">
            {characters.map((character, index) => {
              return (
                <Character
                  img={character.image}
                  species={character.species}
                  status={character.status}
                  type={character.type}
                  index={character.index}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Characters;

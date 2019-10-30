import React from "react";
import "./characters.css";
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
      <div>
        <h1>List of Characters</h1>
        <div className="containers-characters">
          <ul className="ul-characters">
            {characters.map((character, index) => {
              return (
                <li key={index}>
                  <img src={character.image} />
                  <div>
                    <h3>{character.name}</h3>
                    <p className="description">Especie: {character.species}</p>
                    <p className="description">Estado: {character.status}</p>
                    <p className="description">
                      Type: {character.type ? character.type : "Ninguno"}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Characters;

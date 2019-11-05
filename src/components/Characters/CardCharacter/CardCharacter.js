import React from "react";
import "./CardCharacter.css";

class CardCharacter extends React.Component {
  constructor() {
    super();
    this.state = {
      character: [],
      hasErrors: false
    };
  }

  render() {
    const { index, name, img, species, status, type } = this.props;
    console.log(this.props);
    return (
      <li key={index}>
        <img src={img} />
        <div>
          <h4>{name}</h4>
          <p className="description">Especie: {species}</p>
          <p className="description">Estado: {status}</p>
          <p className="description">Type: {type ? type : "Ninguno"}</p>
        </div>
      </li>
    );
  }
}

export default CardCharacter;

import React from "react";

import rick from "../../assets/banner-rick.png";
import "./home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="container-home">
        <img src={rick} alt="Rick y Mortis Site"></img>
      </div>
    );
  }
}

export default Home;

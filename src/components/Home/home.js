import React from 'react';

import rick from '../../assets/banner-rick.png';
import './home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="container-home">
        <img
          class="w-full h-auto rounded-full mr-4 border-2"
          src={rick}
          alt="Rick y Mortis Site"
        />
      </div>
    );
  }
}

export default Home;

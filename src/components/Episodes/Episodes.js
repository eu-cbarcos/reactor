import React, { Component } from "react";
import Pagination from "../Pagination/pagination";

export class Episodes extends Component {
  constructor() {
    super();
    this.state = {
      hasErrors: false,
      episodios: [{}],
      img:
        "https://images-na.ssl-images-amazon.com/images/I/51aOMcjlkyL._SY445_.jpg"
    };
  }
  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/episode/")
      .then(res => res.json())
      .then(res => this.setState({ episodios: res.results }))
      .catch(() => this.setState({ hasErrors: true }));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.episodios.map(episodio => (
            <div className="col-md-4 d-flex align-items-stretch">
              <div
                className="card text-white bg-dark mb-3"
                style={{ width: "18rem" }}
              >
                <div className="card-body">
                  <img
                    src={this.state.img}
                    style={{ width: "50%" }}
                    alt={episodio.name}
                  ></img>
                  <h5 className="card-title">{episodio.name}</h5>
                  <h5 className="card-text">{episodio.air_date}</h5>
                  <h6 className="card-text">{episodio.episode}</h6>
                  <a href={`/episode/${episodio.id}`} className="btn btn-primary"
                  >Details</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="containter">
          <Pagination></Pagination>
        </div>
      </div>
    );
  }
}

export default Episodes;

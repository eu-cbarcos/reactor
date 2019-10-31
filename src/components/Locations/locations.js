import React, { Component } from "react";

export class Locations extends Component {
  constructor() {
    super();
    this.state = {
      hasErrors: false,
      locations: [{}]
    };
  }

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/location/")
      .then(res => res.json())
      .then(res => this.setState({ locations: res.results }))
      .catch(() => this.setState({ hasErrors: true }));
  }
  render() {
    return (
      <div className="container">
        <h3>Locations</h3>
        <div className="row">
          {this.state.locations.map(todo => (
            <div className="col-md-4 d-flex align-items-stretch">
              <div
                className="card text-white bg-dark mb-3"
                style={{ width: "18rem" }}
              >
                <div className="card-body">
                  <h5 title={todo.name}>{todo.name}</h5>
                  <p title={todo.type}>{todo.type}</p>
                  <p title={todo.dimension}>{todo.dimension}</p>
                  <a
                    title={todo.id}
                    href={`/locationdetails/${todo.id}`}
                    className="btn btn-primary"
                  >
                    Go to Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Locations;

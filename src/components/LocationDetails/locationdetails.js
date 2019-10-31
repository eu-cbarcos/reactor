import React, { Component } from "react";

export class LocationDetails extends Component {
  constructor() {
    super();
    this.state = { details: [{}], residents: [], hasErrors: false };
  }

  componentDidMount() {
    let apidetails = `https://rickandmortyapi.com/api/location/${this.props.match.params.id}`;
    fetch(apidetails)
      .then(res => res.json())
      .then(res => {
        this.setState({ details: res });
        this.setState({ residents: res.residents });
      })
      .catch(() => this.setState({ hasErrors: true }));
  }

  render() {
    return (
      <div className="container">
        <h3>Location Details</h3>
        <div className="row">
          <div className="align-items-center">
            <div
              className="card text-white bg-dark mb-3"
              style={{ width: "70rem" }}
            >
              <div className="card-body">
                <h5>{this.state.details.type}</h5>
                <p>{this.state.details.name}</p>

                {this.state.residents.map(resident => (
                  <div>
                    <a href={resident} style={{ fontSize: "12px" }}>
                      {resident}
                    </a>
                    <br />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LocationDetails;

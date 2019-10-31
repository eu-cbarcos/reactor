import React, { Component } from "react";

export class LocationDetails extends Component {
  constructor() {
    super();
    this.state = { details: {}, hasErrors: false };
  }

  componentDidMount() {
    let apidetails = `https://rickandmortyapi.com/api/location/${this.props.match.params.id}`;
    fetch(apidetails)
      .then(res => res.json())
      //   .then(res => {
      //     console.log(res);
      //   })
      .then(res => this.setState({ details: res }))
      .catch(() => this.setState({ hasErrors: true }));
  }

  render() {
    return (
      <div className="container">
        <h3>Location Details</h3>
        <div className="row">
          <div className="col-md-4 d-flex align-items-stretch">
            <div
              className="card text-white bg-dark mb-3"
              style={{ width: "18rem" }}
            >
              <div className="card-body">
                <h5>{this.state.details.type}</h5>
                <p>{this.state.details.name}</p>
                {/* <p>{this.state.details.residents}</p> */}
                {/* {this.state.detailsresidents.map(resident => (
                  <p>{resident}</p>
                ))} */}
              </div>
            </div>
          </div>
        </div>
        {/* {this.state.details.map(data => (
          <div>rrr</div>
        ))} */}
      </div>
    );
  }
}

export default LocationDetails;

import React, { Component } from "react";

export class Pagination extends Component {
  constructor() {
    super();
    this.state = {
      hasErrors: false,
      paginacion: {
        previous: "#"
      }
    };
  }
  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/episode/")
      .then(res => res.json())
      .then(res => this.setState({ paginacion: res.info }))
      .catch(() => this.setState({ hasErrors: true }));
  }

  paginationLoop = () => {
    var rows = [];
    for (let i = 1; i <= this.state.paginacion.pages; i++) {
      rows.push(i);
    }
    return rows;
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <nav aria-label="Paginacion">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href={this.state.paginacion.previous}>
                  Previous
                </a>
              </li>
              {this.paginationLoop().map((item, index) => (
                <li className="page-item">
                  <a className="page-link" href="/">
                    {item}
                  </a>
                </li>
              ))}
              <li className="page-item">
                <a className="page-link" href={this.state.paginacion.next}>
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Pagination;

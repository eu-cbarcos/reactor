import React, { Component } from "react";

export class Pagination extends Component {
  constructor() {
    super();
    this.state = {
      hasErrors: false,
      paginacion: {
        previous: "",
        next: "#"
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
                <a className="page-link" href={`/episodes/1`}>
                  First
                </a>
              </li>
              {this.paginationLoop().map(item => (
                <li className="page-item">
                  <a className="page-link" href={`/episodes/${item}`}>
                    {item}
                  </a>
                </li>
              ))}
              <li className="page-item">
                <a
                  className="page-link"
                  href={`/episodes/${this.state.paginacion.pages}`}
                >
                  Last
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

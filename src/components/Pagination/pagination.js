import React,{Component} from 'react';

export class Pagination extends Component {
  constructor(){
    super();
  this.state = {
    hasErrors: false,
    paginacion: [{}],
  };
}
  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/episode/")
      .then(res => res.json())
      .then(res => this.setState({ episodios: res.info }))
      .catch(() => this.setState({ hasErrors: true }));
  }

  render(){
        return (
          <div className="container">
            <div className="row justify-content-md-center">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item"><a className="page-link" href="/">Previous</a></li>
                <li className="page-item"><a className="page-link" href="/">1</a></li>
                <li className="page-item"><a className="page-link" href="/">2</a></li>
                <li className="page-item"><a className="page-link" href="/">3</a></li>
                <li className="page-item"><a className="page-link" href="/">Next</a></li>
              </ul>
            </nav>
            </div>

          </div>

          )}

    }


export default Pagination;
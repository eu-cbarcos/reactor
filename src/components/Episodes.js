import React,{Component} from 'react';

export class Episodes extends Component {
  constructor(){
    super();
  this.state = {
    hasErrors: false,
    episodios: [{}]
  };
}
  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/episode/")
      .then(res => res.json())
      .then(res => this.setState({ episodios: res.results }))
      .catch(() => this.setState({ hasErrors: true }));
  }

  render(){
    
    const todo =  this.state.episodios.map((todo, i)=>{
        return (
        <div className="row">
          <div className="col-4">
          <div className="card text-white bg-dark mb-3" style={{width: '18rem'}}>
                <div className="card-body">
                  <h3 className="card-title">{todo.name}</h3>
                  <p className="card-text">{todo.episode}</p>
                  <a href="{todo.url}" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
          </div>
        </div>

        )
      })
      return (
          <div>
            {todo}
          </div>
        );
      }
    }


export default Episodes;
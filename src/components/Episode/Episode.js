import React, { Component } from "react";

export class Episode extends Component{
    constructor(){
        super();
        this.state = {
          hasErrors: false,
          id:'',
          name:'',
          air_date:'',
          episode:'',
          characters:[{}],
          created:''
        };
    }
    componentDidMount() {
      fetch("https://rickandmortyapi.com/api/episode/2")
        .then(res => res.json())
        .then(res => this.setState({ res }))
        .catch(() => this.setState({ hasErrors: true }));
    }

    render(){
        return (
            <div className="container">
                <h1>{this.state.name}</h1>

                <div className="item episode">
                    <div className="d-inline p-2 bg-dark text-white">Episode</div>
                    <div className="d-inline p-2">{this.state.episode}</div>
                </div>

                <div className="item air_date">
                    <div className="d-inline p-2 bg-dark text-white">Air date</div>
                    <div className="d-inline p-2">{this.state.air_date}</div>
                </div>
            </div>
        );
    }


}
import React, { Component } from "react";
import "./Episode.css";

export class Episode extends Component{
    constructor(){
        super();
        this.state = {
          hasErrors: false,
          details:{}
        };
    }
    componentDidMount() {
      let apiDetails = `https://rickandmortyapi.com/api/episode/${this.props.match.params.id}`;
      console.log(apiDetails);
      fetch(apiDetails)
        .then(res => res.json())
        .then(res => this.setState({ details:res }))
        .catch(() => this.setState({ hasErrors: true }));
    }

    render(){
        return (
            <div className="container episode">
                <h1>{this.state.details.name}</h1>

                <div className="row">
                    <div className="col-sm-6">

                        <h2>Details</h2>

                        <div className="item episode">
                            <div className="d-inline p-2 bg-dark">Episode</div>
                            <div className="d-inline p-2">{this.state.details.episode}</div>
                        </div>

                        <div className="item air_date">
                            <div className="d-inline p-2 bg-dark text-white">Air date</div>
                            <div className="d-inline p-2">{this.state.details.air_date}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Episode;
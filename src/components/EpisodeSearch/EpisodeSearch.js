import React, { Component } from "react";

export class EpisodeSearch extends Component {
    constructor() {
      super();
      this.state = {
        hasErrors: false,
        episodes: [{}]
      };
    }
    componentDidMount() {
      fetch("https://rickandmortyapi.com/api/episode/")
        .then(res => res.json())
        .then(res => this.setState({ episodes: res.results }))
        .catch(() => this.setState({ hasErrors: true }));
    }
}

export default Episodes;

import React, { useEffect, useState } from 'react';
import './Episode.css';

const Episode = () => {
  const [details, setDetails] = useState({});
  const [hasErrors, setHasErrors] = useState({});

  useEffect(() => {
    let apiDetails = `https://rickandmortyapi.com/api/episode/${this.props.match.params.id}`;
    console.log(apiDetails);
    fetch(apiDetails)
      .then((res) => res.json())
      .then((res) => setDetails(res))
      .catch(() => setHasErrors(true));
  }, []);

  return (
    <div className="container episode">
      <h1>{this.state.details.name}</h1>

      <div className="row">
        <div className="col-sm-6">
          <div className="card bg-dark">
            <div className="card-body">
              <h2 class="card-title">Details</h2>

              <div className="item episode">
                <div className="d-inline p-2 bg-primary">Episode</div>
                <div className="d-inline p-2">{this.state.details.episode}</div>
              </div>

              <div className="item air_date">
                <div className="d-inline p-2 bg-primary text-white">
                  Air date
                </div>
                <div className="d-inline p-2">
                  {this.state.details.air_date}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episode;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ShowListScreen = () => {
  const [shows, setShows] = useState([]);

  async function loadShows() {
    try {
      const response = await axios.get(
        `https://api.tvmaze.com/search/shows?q=all`
      );
      console.log(response.data);
      setShows(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadShows();
  }, []);

  return (
    <div className="container container-style">
      <div className="row">
        {shows.map((show) => (
          <div className="col-md-4 mb-3" key={show.show.id}>
            <Link to={`/shows/${show.show.id}`}>
              <div className="card card-style">
                <div className="card-body">
                  <img src={show.show.image.medium} alt="Nothing" />
                  <h2 className="card-title">{show.show.name}</h2>
                  <h5>{show.show.genres.join()}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowListScreen;

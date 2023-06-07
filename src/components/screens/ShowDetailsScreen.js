import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowDetailsScreen = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setShow(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      {show ? (
        <div className="container">
          <h1>{show.name}</h1>
          <div className="make-flex">
            <img src={show.image.medium} alt="image" />
            <div className="resize">
              <p>{show.summary}</p>
              <button className="btn btn-primary">Book Ticket</button>
            </div>
          </div>
        </div>
      ) : (
        <p>No data found.</p>
      )}
    </div>
  );
};

export default ShowDetailsScreen;

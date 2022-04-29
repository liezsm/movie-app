import React from "react";
// style

// routing

import { Link } from "react-router-dom";
import { Image } from "./MovieItem.styles";

const MovieItem = ({ image, movieId, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt='movie-thumb' />
      </Link>
    ) : (
      <Image src={image} alt='movie-thumb' />
    )}
  </div>
);

export default MovieItem;

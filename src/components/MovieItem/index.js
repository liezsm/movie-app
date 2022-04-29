import React from "react";
// style

// routing

import { Link } from "react-router-dom";
import { Image } from "./MovieItem.styles";

const MovieItem = ({ image, movieId, clickable }) => {
  return;
  {
    clickable ? (
      <Link to={`/${movieId}`}>
        <div>
          <Image src={image} alt='movie-thumb' />
        </div>
      </Link>
    ) : (
      <Image src={image} alt='movie-thumb' />
    );
  }
};

export default MovieItem;

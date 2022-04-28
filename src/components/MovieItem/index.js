import React from "react";
// style

import { Image } from "./MovieItem.styles";

const MovieItem = ({ image, movieId, clickable }) => {
  return (
    <div>
      <Image src={image} alt='movie-thumb' />
    </div>
  );
};

export default MovieItem;

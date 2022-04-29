import React from "react";

// styles
import { Wrapper, Content, Text } from "./MovieInfo.styles";

// components
import MovieItem from "../MovieItem";

// config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

// IMAGE
import NoImage from "../../images/no_image.jpg";

const MovieInfo = ({ movie }) => {
  console.log(movie);
  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <MovieItem
          // exp if naay image i display, kun wala, kato no item found
          image={
            movie.poster_path
              ? ` ${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
        />
        <Text>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>

          <div className='rating-directors'>
            {/* rating */}
            <div>
              <h3>RATING</h3>
              <div className='rating'>{movie.vote_average}</div>
            </div>
            {/* director */}
            <div className='director'>
              <h3>DIRECTOR</h3>
              {movie.director.map((person) => (
                <p key={person.credit_id}>{person.name}</p>
              ))}
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default MovieInfo;

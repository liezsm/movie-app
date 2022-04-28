import React from "react";

// config

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

// components

import Hero from "./Hero";

// hooks
import { useHomeFetch } from "../hooks/useHomeFetch";

// image
import NoImage from "../images/no_image.jpg";
import Movies from "./MoviesTiles";
import MovieItem from "./MovieItem";
import Spinner from "./Spinner";

const Home = () => {
  const { state, loading, error } = useHomeFetch();
  console.log(state);

  return (
    <>
      {state.results[0] ? (
        <Hero
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <Spinner />
      <Movies header='Popular Movies'>
        {state.results.map((movie) => (
          <MovieItem
            key={movie.id}
            // exp if naay image i display, kun wala, kato no item found
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            clickable={true}
          />
        ))}
      </Movies>
    </>
  );
};

export default Home;

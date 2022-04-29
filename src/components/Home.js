import React from "react";

// config

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

// components

import Hero from "./Hero";
import Movies from "./MoviesTiles";
import MovieItem from "./MovieItem";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "./Button";

// hooks
import { useHomeFetch } from "../hooks/useHomeFetch";

// image
import NoImage from "../images/no_image.jpg";

const Home = () => {
  const { state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore } =
    useHomeFetch();
  console.log(state);

  // exp checking for error and show diffrent ui

  if (error) {
    return <div> Something went wrong... </div>;
  }

  return (
    <>
      {!searchTerm && state.results[0] ? (
        <Hero
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <SearchBar onSearch={setSearchTerm} />
      <Movies header={searchTerm ? "Search Result" : "Popular Movies"}>
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
      {/* // exp show the loading animation if still fetchign data */}
      {loading && <Spinner />}
      {/* // exp if the results have more than one page show the load more button */}
      {state.page < state.total_pages && !loading && (
        <Button text='Load More' callback={() => setIsLoadingMore(true)} />
      )}
    </>
  );
};

export default Home;

import React from "react";

// routing

import { Link, useParams } from "react-router-dom";

// config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

// compnents
import Spinner from "./Spinner";
import MovieBreadCrumb from "./BreadCrumb";
import MovieInfo from "./Movie_Info";
import MovieInfoBar from "./MovieInforBar";
import Actor from "./Actor";
import MoviesTiles from "./MoviesTiles";
// image

// hook
import { useMovieFetch } from "../hooks/useMovieFetch";

import NoImage from "../images/no_image.jpg";

const Movie = () => {
  //get the movie id from the link using useparams
  const { movieID } = useParams();

  // then pass as an argument to the usemoviefetch hook
  const { state: movie, loading, error } = useMovieFetch(movieID);
  // exp loading then display loading animation

  if (loading) return <Spinner />;
  // exp if theres an error
  if (error) return <div> Something went wrong...</div>;

  console.log("movie", movie);
  return (
    <>
      <div className='movie_detail'>
        <MovieBreadCrumb movieTitle={movie.original_title} />
        <MovieInfo movie={movie} />
        <MovieInfoBar
          time={movie.runtime}
          budget={movie.budget}
          revenue={movie.revenue}
        />
        {/* all actors in grid layout */}
        <MoviesTiles header='Actors'>
          {movie.actors.map((actor) => (
            <Actor
              key={actor.credit_id}
              name={actor.name}
              character={actor.character}
              imageUrl={
                actor.profile_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                  : NoImage
              }
            />
          ))}
        </MoviesTiles>
      </div>
    </>
  );
};

export default Movie;

import { useEffect, useState, useCallback } from "react";

import API from "../API";

// function for local storage

import { isPersistedState } from "../helpers";

export const useMovieFetch = (movieID) => {
  // exp i added an initial values sinces it throws an error when console logging directors.length says undefined
  // https://stackoverflow.com/questions/55810240/reactjs-app-crashes-with-error-consider-adding-error-boundaries-to-your-tree

  const [state, setState] = useState({
    movie: "",
    actors: [],
    director: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetch = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);
      const movie = await API.fetchMovie(movieID);

      const credits = await API.fetchCredits(movieID);
      // get specific datas needed only(directors, member)
      const directors = credits.crew.filter((mem) => mem.job == "Director");

      setState({
        ...movie,
        actors: credits.cast,
        director: directors,
      });

      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }, [movieID]);

  useEffect(() => {
    // before fecthing check first if theres data in local storage

    const localData = isPersistedState(movieID);
    // if theres data, then set as the movie(state)
    if (localData) {
      setState(localData);
      setLoading(false);
    }
    fetch();
  }, [movieID, fetch]);

  // for writing data into local storage if there no data yet using useEffect

  useEffect(() => {
    localStorage.setItem(movieID, JSON.stringify(state));
  }, [movieID, state]);

  return { state, loading, error };
};

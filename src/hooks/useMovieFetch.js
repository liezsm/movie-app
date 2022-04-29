import { useEffect, useState, useCallback } from "react";

import API from "../API";

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
    fetch();
  }, [movieID, fetch]);

  return { state, loading, error };
};

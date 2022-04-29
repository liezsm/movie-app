import { useEffect, useState } from "react";

import API from "../API";

export const useMovieFetch = (movieID) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // iife
    (async () => {
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
          directors,
        });

        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    })();
  }, [movieID]);

  return { state, loading, error };
};

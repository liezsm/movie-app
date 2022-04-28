import { useEffect, useState } from "react";

// api

import API from "../API";

const inititalState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = (url) => {
  // initial
  const [state, setState] = useState(inititalState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  console.log(searchTerm);

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(searchTerm, page);

      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  // only run firt component mount, will run once use empty array
  // exp initial render
  useEffect(() => {
    fetchMovies();
  }, []);

  return { state, loading, error, setSearchTerm };
};

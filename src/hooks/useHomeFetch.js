import { useEffect, useState } from "react";

// api

import API from "../API";

// localstorage

import { isPersistedState } from "../helpers";
const inititalState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  // initial
  const [state, setState] = useState(inititalState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoadingMore, setIsLoadingMore] = useState(false);

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

  // exp initial render and search
  useEffect(() => {
    // exp if not searchTerm then look for if theres data from the storage

    if (!searchTerm) {
      const localData = isPersistedState("homeState");
      // if theres data then set as the state

      if (localData) {
        setState(localData);
      }
    }

    setState(inititalState); // i erase sa ang sulod daan para mapulihan ang data base sa gsearch then mao na madisplay
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  //exp is load more effect

  useEffect(() => {
    if (!isLoadingMore) return;

    fetchMovies(state.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore, state.page, searchTerm]);

  // exp write a local storage

  useEffect(() => {
    if (!searchTerm) {
      localStorage.setItem("homeState", JSON.stringify(state));
    }
  }, [searchTerm, state]);

  return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };
};

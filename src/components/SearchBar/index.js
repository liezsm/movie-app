import React, { useState, useEffect, useRef } from "react";

// styles
import { Wrapper, Content } from "./SearchBar.styles";

// image

import searchIcon from "../../images/search-icon.svg";

const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const initial = useRef(true);
  console.log(value);
  // exp to avoid running the useeffect in the initial, we use useRed to set it conditionally
  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      onSearch(value);
    }, 500);

    return () => clearTimeout(timer);
  }, [onSearch, value]);
  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt='search-icon' />
        <input
          type='text'
          placeholder='Search Movie'
          name='search'
          onChange={(e) => handleChange(e)}
          value={value}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;

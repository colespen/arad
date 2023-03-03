import React, { useState, useEffect, useCallback } from "react";

import { useGlobalState } from "../../GlobalState";
import { useDebounce } from "../../hooks/useDebounce";


const SearchBar = () => {
  const { setState } = useGlobalState();
  const [value, setValue] = useState("");
  const term = useDebounce(value, 400);

  const onSearch = useCallback(
    (query: string) => setState((prev) => ({ ...prev, query })),
    [term]
  );

  useEffect(() => {
    onSearch(term);
  }, [onSearch, term]);

  return (
    <section className="search">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <input
          className="search-input"
          spellCheck="false"
          placeholder="search articles"
          name="search"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </section>
  );
};

export default SearchBar;

import React from "react";
import { useState, useEffect } from "react";

import { useGlobalState } from "../../GlobalState";

import mockData from "../../mock-data-util/mock-data.json";
import { Article } from "../../mock-data-util/mock-interface";
import { searchArray } from "../../helper/searchDatabase";

import ArticlesList from "./ArticlesList";

import "./index.css";

const Search = () => {
  const [searchResults, setSearchResults] = useState<Article[]>([]);
  const { state } = useGlobalState();
  
  useEffect(() => {
    const results = searchArray(mockData.results, state.query)
    setSearchResults(results)
  }, [state.query])

  return (
    <div className="Search">
      <ArticlesList results={searchResults}/>
    </div>
  );
};

export default Search;

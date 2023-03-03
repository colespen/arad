import React from "react";
import { useState, useEffect } from "react";

import { useGlobalState } from "../../GlobalState";

import mockData from "../../mock-data-util/mock-data.json";
// import useMounted from "../../mock-data-util/useMounted";
import { Article } from "../../mock-data-util/mock-interface";
import { searchArray } from "../../helper/searchDatabase";

import ArticlesList from "./ArticlesList";

import "./index.css";

const Search = () => {
  const [searchResults, setSearchResults] = useState<Article[]>([]);
  const { state } = useGlobalState();
  // const mounted = useMounted();

  console.log(searchArray(mockData.results, state.query))
  
  useEffect(() => {
    const results = searchArray(mockData.results, state.query)
    setSearchResults(results)
  }, [state.query])

  // const getArticles = useCallback(() => {
  //   if (mounted.current) {
  //     setSearchResults(mockData.results);
  //   }
  // }, [mounted]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     getArticles();
  //   }, 450);
  // }, [getArticles]);

  return (
    <div className="Search">
      <ArticlesList results={searchResults}/>
    </div>
  );
};

export default Search;

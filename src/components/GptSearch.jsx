import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BANNER } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute">
        <img src={BANNER} />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;

import React from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constants";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import UseTopRatedMovies from "../hooks/UseTopRatedMovies";
import UseUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  UseTopRatedMovies();
  UseUpcomingMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
          <GptSearch />):
        (<>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;

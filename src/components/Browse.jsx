import React from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import UseTopRatedMovies from '../hooks/UseTopRatedMovies';
import UseUpcomingMovies from '../hooks/useUpcomingMovies';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  UseTopRatedMovies();
  UseUpcomingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
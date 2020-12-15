import React from 'react';
import Movie from './Movie';

export default function MovieCard (props) {
  return(
    <div className='movie-card'>
      <h1>{Movie.title}</h1>
    </div>
  );
}

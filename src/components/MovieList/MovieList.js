import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onPlay, onShare }) => {
  return (
    <div className="row">
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onPlay={onPlay}
          onShare={onShare}
        />
      ))}
    </div>
  );
};

export default MovieList;
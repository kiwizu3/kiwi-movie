import React from 'react';
import MovieRating from './MovieRating';
import MovieActions from './MovieActions';

const MovieCard = ({ movie, onPlay, onShare }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 movie-card">
        <img 
          src={movie.thumbnailUrl} 
          className="card-img-top" 
          alt={movie.title} 
          style={{ height: '200px', objectFit: 'cover', objectPosition:'center' }} 
        />
        <div className="card-body d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h5 className="card-title mb-0">{movie.title}</h5>
            <MovieRating rating={movie.rating} />
          </div>
          <p className="card-text flex-grow-1">{movie.description}</p>
          <MovieActions 
            movie={movie}
            onPlay={onPlay}
            onShare={onShare}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
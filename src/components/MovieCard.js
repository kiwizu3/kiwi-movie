import React from 'react';

const MovieCard = ({ movie, onPlay, onShare }) => {
  const handleShare = () => {
    onShare(movie);
  };

  return (
    <div className="col-6 col-lg-3 col-md-4 mb-4">
      <div className="card border-0 shadow h-100 movie-card">
      <div className="position-relative">
      <img src={movie.thumbnailUrl} className="movie-card-image" alt={movie.title} style={{ height: '200px', objectFit: 'cover', objectPosition:'top' }} />
      <span className="badge bg-warning position-absolute movie-rating">{movie.rating}</span>
      </div>
        <div className="card-body d-flex flex-column justify-content-between">
          <div className="d-flex flex-column align-items-start">
            <h6 className="card-title mb-0">{movie.title}</h6>
            <small>{movie.year}</small>
          </div>
          {/* <p className="card-text flex-grow-1">{movie.description}</p> */}
          <div className="d-flex gap-2 align-items-center justify-content-between mt-3">
            <button className="btn btn-dark btn-sm rounded-pill px-4" onClick={() => onPlay(movie)}>
              Play
            </button>
            <button className="btn btn-dark btn-sm rounded-pill" onClick={handleShare}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="currentColor" className="bi bi-share" viewBox="0 0 16 16">
                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
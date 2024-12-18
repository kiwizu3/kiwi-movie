import React from 'react';

const MovieActions = ({ movie, onPlay, onShare }) => (
  <div className="d-flex justify-content-between align-items-center mt-3">
    <button className="btn btn-primary" onClick={() => onPlay(movie)}>
      Play
    </button>
    <button className="btn btn-outline-secondary" onClick={() => onShare(movie)}>
      Share
    </button>
  </div>
);

export default MovieActions;
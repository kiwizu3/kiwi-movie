import React from 'react';
import VideoPlayer from './VideoPlayer';
import PlayerHeader from './PlayerHeader';

const MoviePlayer = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <PlayerHeader title={movie.title} onClose={onClose} />
          <VideoPlayer movie={movie} />
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </div>
  );
};

export default MoviePlayer;
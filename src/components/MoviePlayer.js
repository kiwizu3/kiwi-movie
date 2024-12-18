import React from 'react';

const MoviePlayer = ({ movie, onClose }) => {
  if (!movie) return null;

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal')) {
      onClose();
    }
  };

  return (
    <div
      className="modal fade show"
      style={{ display: 'block', background: '#1e1e1ea1' }}
      tabIndex="-1"
      onClick={handleBackdropClick}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
            {/* <div className="modal-header">
            <h5 className="modal-title">{movie.title}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div> */}
          <div className="modal-body p-0">
          {movie.videoURL ? (
        <video controls autoPlay className="w-100">
          <source src={movie.videoURL} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${movie.youtubeId}`}
          title={movie.title}
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePlayer;

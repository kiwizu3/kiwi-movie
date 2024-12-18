import React from 'react';

const VideoPlayer = ({ movie }) => (
  <div className="modal-body p-0">
    <div className="ratio ratio-16x9">
      {movie.videoURL ? (
        <video controls width="640" height="360">
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
);

export default VideoPlayer;
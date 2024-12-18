import React, { useState } from 'react';
import MovieCard from './components/MovieCard';
import MoviePlayer from './components/MoviePlayer';
import ThemeToggle from './components/ThemeToggle';
import { movies } from './data/movies';
import './App.css';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  const handleShare = (movie) => {
    const shareUrl = `${window.location.origin}?movie=${movie.id}`;
    
    if (navigator.share) {
      navigator.share({
        title: movie.title,
        text: movie.description,
        url: shareUrl,
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <ThemeToggle isDark={isDarkMode} onToggle={toggleTheme} />
      
      <div className="container py-5">
        <h1 className="text-center display-4 fw-bold mb-5 title-main">Movieflix</h1>
        <div className="row">
          {movies.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onPlay={setSelectedMovie}
              onShare={handleShare}
            />
          ))}
        </div>
      </div>

      {selectedMovie && (
        <MoviePlayer
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}

export default App;
import React from 'react';

const ThemeToggle = ({ isDark, onToggle }) => {
  return (
    <button
      className={`btn ${isDark ? 'btn-outline-light' : 'btn-outline-dark'} rounded-circle border-0 position-fixed top-0 end-0 m-3 theme-toggle-btn`}
      onClick={onToggle}
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;
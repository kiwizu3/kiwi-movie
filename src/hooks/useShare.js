export function useShare() {
  const handleShare = (movie) => {
    const shareUrl = `${window.location.origin}?movie=${movie.id}`;
    
    if (navigator.share) {
      return navigator.share({
        title: movie.title,
        text: movie.description,
        url: shareUrl,
      });
    }
    
    navigator.clipboard.writeText(shareUrl);
    alert('Link copied to clipboard!');
  };

  return { handleShare };
}
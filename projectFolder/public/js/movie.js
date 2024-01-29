document.addEventListener('DOMContentLoaded', () => {
    const genreButtons = document.querySelectorAll('button[id$="Btn"]');
    const movieContainer = document.getElementById('movieContainer');
  
    genreButtons.forEach(button => {
      button.addEventListener('click', () => {
        const genre = button.id.replace('Btn', '').toLowerCase();
        filterMovies(genre);
      });
    });
  
    function filterMovies(genre) {
      console.log(`Filtering movies by ${genre}`);
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded');
    // Function to fetch movies from your local API
    async function fetchMovies() {
      try {
        const response = await fetch('/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching movies:', error);
        return [];
      }
    }
    // Function to display movies fetched from your local API
    async function displayLocalApiMovies() {
      const movies = await fetchMovies();
      console.log('Movies from local API:', movies);
      // Add logic to display movies on the webpage
    }
    // Event listener for the button that triggers fetching and displaying movies
    const fetchMoviesBtn = document.getElementById('fetchMoviesBtn');
    if (fetchMoviesBtn) {
      fetchMoviesBtn.addEventListener('click', displayLocalApiMovies);
    } else {
      console.error('Element with ID "fetchMoviesBtn" not found.');
    }
    // Additional code or configurations if needed
  });
  
document.addEventListener('DOMContentLoaded', () => {
  console.log('Script loaded');

  // Function to display sample movies
  function displaySampleMovies(category) {
      const movieList = movies[category] || [];
      const movieContainer = document.getElementById('movieContainer');
      movieContainer.innerHTML = '';

      if (movieList.length === 0) {
          movieContainer.innerHTML = '<p>No movies available in this category</p>';
      } else {
          const ul = document.createElement('ul');
          movieList.forEach(movie => {
              const li = document.createElement('li');
              li.textContent = movie;
              ul.appendChild(li);
          });
          movieContainer.appendChild(ul);
      }
  }

  // Function to filter sample movies
  function filterMovies(genre) {
      console.log(`Filtering movies by ${genre}`);
      displaySampleMovies(genre);
  }

  // Event listener for the login button
  const loginBtn = document.getElementById('loginBtn');

  if (loginBtn) {
      loginBtn.addEventListener('click', () => {
          // Replace '/path/to/homepage.handlebar' with the actual path
          window.location.href = '/views/layouts/main.handlebars';
      });
  } else {
      console.error('Element with ID "loginBtn" not found.');
  }

  // Sample movies object
  const movies = {
      // Add sample movies by genre here
      // Example:
      // 'Action': ['Movie 1', 'Movie 2'],
      // 'Comedy': ['Movie 3', 'Movie 4'],
  };

  // Additional code or configurations if needed

  // You can call filterMovies with an initial genre if desired
  // filterMovies('Action');
});

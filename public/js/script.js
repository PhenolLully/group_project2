document.addEventListener('DOMContentLoaded', () => {
  console.log('Script loaded');

  // Assuming you have a base path where movie images are stored
  const basePath = '/movieImages/';

  // Function to display movie images for a given category
  function displayMovieImages(category) {
      const movieList = movies[category] || [];
      const movieContainer = document.getElementById('movieContainer');
      movieContainer.innerHTML = ''; // Clear existing content

      if (movieList.length === 0) {
          movieContainer.innerHTML = '<p>No movies available in this category</p>';
      } else {
          movieList.forEach(movie => {
              const img = document.createElement('img');
              // Assuming the image name matches the movie title with a common extension, e.g., .jpg
              img.src = `${basePath}${movie.replace(/[^a-zA-Z]/g, "").toLowerCase()}.jpg`;
              img.alt = movie;
              img.style.width = '125px'; // Example size, adjust as necessary
              movieContainer.appendChild(img);
          });
      }
  }

  // Updated function to filter sample movies and display images
  function filterMovies(genre) {
      console.log(`Filtering movies by ${genre}`);
      displayMovieImages(genre);
  }

  // Event listener for the login button
  const loginBtn = document.getElementById('loginBtn');

  if (loginBtn) {
      loginBtn.addEventListener('click', () => {
          // Replace '/path/to/homepage.handlebar' with the actual path
          window.location.href = '/';
      });
  } else {
      console.error('Element with ID "loginBtn" not found.');
  }

  // Sample movies object (unchanged)
  const movies = {
      'Action': ['The Matrix', 'First Blood', 'John Wick', "Spider-Man No Way Home", "Scarface"],
      'Thriller': ['Lights Out', 'Warm Bodies', 'Shutter Island', "The Silence of The Lambs", "Seven"],
      'Horror': ['The Exorcist', 'The Conjuring', 'A Quiet Place', "Alien", "X"],
      'Comedy': ['21 Jump Street', 'Scary Movie', 'Happy Gilmore', "Friday", "Rush Hour"],
      'Romance': ['The Notebook', 'Romeo & Juliet', 'Love Jones', "Pretty Woman", "Titanic"],
  };

  // Attach event listeners to buttons
  const genres = ['Action', 'Thriller', 'Horror', 'Comedy', 'Romance'];
  genres.forEach(genre => {
      const btn = document.getElementById(genre.toLowerCase() + 'Btn');
      if (btn) {
          btn.addEventListener('click', () => filterMovies(genre));
      }
  });
});

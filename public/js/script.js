document.addEventListener('DOMContentLoaded', () => {
  console.log('Script loaded');

  
  const basePath = '/movieImages/';

  
  function displayMovieImages(category) {
      const movieList = movies[category] || [];
      const movieContainer = document.getElementById('movieContainer');
      movieContainer.innerHTML = ''; 

      if (movieList.length === 0) {
          movieContainer.innerHTML = '<p>No movies available in this category</p>';
      } else {
          movieList.forEach(movie => {
              const img = document.createElement('img');
              
              img.src = `${basePath}${movie.replace(/[^a-zA-Z]/g, "").toLowerCase()}.jpg`;
              img.alt = movie;
              img.style.width = '125px'; 
              movieContainer.appendChild(img);
          });
      }
  }

  
  function filterMovies(genre) {
      console.log(`Filtering movies by ${genre}`);
      displayMovieImages(genre);
  }

  
  const loginBtn = document.getElementById('loginBtn');

  if (loginBtn) {
      loginBtn.addEventListener('click', () => {
          
          window.location.href = '/';
      });
  } else {
      console.error('Element with ID "loginBtn" not found.');
  }

  
  const movies = {
      'Action': ['The Matrix', "Spider-Man No Way Home", "Scarface"],
      'Thriller': [ 'Shutter Island', "The Silence of The Lambs", "Seven"],
      'Horror': ['The Exorcist', 'The Conjuring', 'A Quiet Place'],
      'Comedy': ['21 Jump Street', "Friday", "Rush Hour"],
      'Romance': [ 'Romeo & Juliet', 'Love Jones', "Pretty Woman",],
  };

  
  const genres = ['Action', 'Thriller', 'Horror', 'Comedy', 'Romance'];
  genres.forEach(genre => {
      const btn = document.getElementById(genre.toLowerCase() + 'Btn');
      if (btn) {
          btn.addEventListener('click', () => filterMovies(genre));
      }
  });
});

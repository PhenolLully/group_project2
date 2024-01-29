document.addEventListener('DOMContentLoaded', () => {
  console.log('Script loaded');


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

  function filterMovies(genre) {
      console.log(`Filtering movies by ${genre}`);
      displaySampleMovies(genre);
  }

  const loginBtn = document.getElementById('loginBtn');

  if (loginBtn) {
      loginBtn.addEventListener('click', () => {
        
          window.location.href = '/';
      });
  } else {
      console.error('Element with ID "loginBtn" not found.');
  }
});

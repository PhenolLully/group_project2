document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded');
  
    // Fetch genres from the server and populate the dropdown
    const genreDropdown = document.getElementById('genre');
    fetch('/api/genres')
      .then(response => response.json())
      .then(genres => {
        genres.forEach(genre => {
          const option = document.createElement('option');
          option.value = genre;
          option.textContent = genre;
          genreDropdown.appendChild(option);
        });
      })
      .catch(error => console.error('Error fetching genres:', error));
  
    // Event listener for genre selection
    genreDropdown.addEventListener('change', () => {
      const selectedGenre = genreDropdown.value;
      if (selectedGenre) {
        // Fetch movies based on the selected genre
        fetch(`/movies/${selectedGenre}`)
          .then(response => response.json())
          .then(movies => {
            displayMovies(movies, selectedGenre);
          })
          .catch(error => console.error('Error fetching movies:', error));
      }
    });
  
    // Event listener for adding a new movie
    const addMovieForm = document.getElementById('addMovieForm');
    addMovieForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const titleInput = document.getElementById('title');
      const genreInput = document.getElementById('genre');
  
      const newMovie = {
        title: titleInput.value,
        genre: genreInput.value,
      };
  
      // Send a POST request to add the new movie
      fetch('/movies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMovie),
      })
        .then(response => response.json())
        .then(addedMovie => {
          // Clear the form and update the movie list
          titleInput.value = '';
          genreInput.value = '';
          fetch(`/movies/${addedMovie.genre}`)
            .then(response => response.json())
            .then(movies => {
              displayMovies(movies, addedMovie.genre);
            })
            .catch(error => console.error('Error fetching movies after adding:', error));
        })
        .catch(error => console.error('Error adding new movie:', error));
    });
  
    // Function to display movies in the UI
    function displayMovies(movies, genre) {
      const moviesList = document.getElementById('moviesList');
      moviesList.innerHTML = `<h2>${genre} Movies</h2>`;
      
      if (movies.length === 0) {
        moviesList.innerHTML += '<p>No movies found for this genre.</p>';
      } else {
        const ul = document.createElement('ul');
        movies.forEach(movie => {
          const li = document.createElement('li');
          li.textContent = movie.title;
          ul.appendChild(li);
        });
        moviesList.appendChild(ul);
      }
    }
  });
  
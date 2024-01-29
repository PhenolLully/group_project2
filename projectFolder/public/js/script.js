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
        window.location.href = '/';
      });
    } else {
      console.error('Element with ID "loginBtn" not found.');
    }
  
    // Sample movies object
    const movies = {
      'Action': ['The Matrix', 'The Dark Knight', 'John Wick', "Spider-Man: No Way Home", "Scarface"],
      'Thriller': ['Lights Out', 'The Girl On The Train', 'Shutter Island',"The Silence of The Lambs","Seven"],
      'Horror': ['The Exorcist', 'The Conjuring', 'A Quiet Place',"The Blair Witch Project","Bride of Chucky"],
      'Comedy': ['21 Jump Street', 'Scary Movie', 'Happy Gilmore', "Friday","Rush Hour"],
      'Romance': ['The Notebook', 'Romeo & Juliet', 'Love Jones', "Pretty Woman","500 Days of Summer"],
    };
  
    // Additional code or configurations if needed
  
    // You can call filterMovies with an initial genre if desired
    // filterMovies('Action');
  
    // Event listeners for filter buttons (adjust button IDs accordingly)
    const actionBtn = document.getElementById('actionBtn');
    const thrillerBtn = document.getElementById('thrillerBtn');
    const horrorBtn = document.getElementById('horrorBtn');
    const comedyBtn = document.getElementById('comedyBtn');
    const romanceBtn = document.getElementById('romanceBtn');
  
    actionBtn.addEventListener('click', () => filterMovies('Action'));
    thrillerBtn.addEventListener('click', () => filterMovies('Thriller'));
    horrorBtn.addEventListener('click', () => filterMovies('Horror'));
    comedyBtn.addEventListener('click', () => filterMovies('Comedy'));
    romanceBtn.addEventListener('click', () => filterMovies('Romance'));
  });
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
      // Your movie filtering logic goes here
      // You can use the movieContainer to display the filtered movies
    }
  });
  
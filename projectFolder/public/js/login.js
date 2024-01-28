// login.js

const login = async () => {
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.location.replace('/');
      } else {
        const errorMessage = await response.text();
        alert(`Failed to log in. ${errorMessage}`);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login. Please try again.');
    }
  } else {
    alert('Please enter both email and password.');
  }
};

// Event listener for the login button
document.querySelector('.login-form').addEventListener('submit', login);

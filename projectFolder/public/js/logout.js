const logout = async () => {
  try {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      credentials: 'include',  // Include credentials for cross-origin requests if necessary
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      const errorMessage = await response.text();
      alert(`Failed to log out. ${errorMessage}`);
    }
  } catch (error) {
    console.error('Error during logout:', error);
    alert('An error occurred during logout. Please try again.');
  }
};

document.querySelector('#logout').addEventListener('click', logout);

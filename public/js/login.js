const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#floatingInput').value.trim();
    const password = document.querySelector('#floatingPassword').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  document
    .querySelector('#signin-form')
    .addEventListener('submit', loginFormHandler);
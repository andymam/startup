  async function login() {
    await loginOrCreate(`/api/auth/login`);
  }
  
  async function loginOrCreate(endpoint) {
    const userName = document.querySelector('#typeEmailX')?.value;
    const password = document.querySelector('#typePasswordX')?.value;
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ email: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  
    if (response.ok) {
      localStorage.setItem('userName', userName);
      window.location.href = 'main.html';
    } else if (endpoint == "/api/auth/login") {
      loginOrCreate(`/api/auth/create`);
    } else {
      console.log(response.status, response.statusText);
    }
  }
  
  function logout() {
    localStorage.removeItem('userName');
    fetch(`/api/auth/logout`, {
      method: 'delete',
    }).then(() => (window.location.href = '/'));
  }
  
  async function getUser(email) {
    // See if we have a user with the given email.
    const response = await fetch(`/api/user/${email}`);
    if (response.status === 200) {
      return response.json();
    }
  
    return null;
  }
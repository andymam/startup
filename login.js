function login() {
    const nameEl = document.querySelector("#typeEmailX");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "index.html";
  }

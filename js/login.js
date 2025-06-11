
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const logoutBtn = document.getElementById("logout-btn");
  const authLink = document.getElementById("auth-link");

  function toonLoginStatus() {
    const gebruiker = localStorage.getItem("gebruiker");

    if (gebruiker) {
      if (authLink) {
        authLink.innerText = "Uitloggen";
        authLink.href = "#";
        authLink.onclick = function (e) {
          e.preventDefault();
          localStorage.removeItem("gebruiker");
          if (loginForm) loginForm.style.display = "block";
          if (logoutBtn) logoutBtn.style.display = "none";
          authLink.innerText = "Inloggen";
          authLink.href = "inloggen.html";
          if (document.getElementById("username")) document.getElementById("username").value = "";
          if (document.getElementById("password")) document.getElementById("password").value = "";
        };
      }
      if (loginForm) loginForm.style.display = "none";
      if (logoutBtn) logoutBtn.style.display = "block";
    } else {
      if (authLink) {
        authLink.innerText = "Inloggen";
        authLink.href = "inloggen.html";
        authLink.onclick = null;
      }
      if (loginForm) loginForm.style.display = "block";
      if (logoutBtn) logoutBtn.style.display = "none";
    }
  }

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (username.length >= 3 && password.length >= 3) {
        localStorage.setItem("gebruiker", username);
        toonLoginStatus();
      } else {
        alert("Gebruikersnaam en wachtwoord moeten minstens 3 tekens zijn.");
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      localStorage.removeItem("gebruiker");
      toonLoginStatus();
      if (document.getElementById("username")) document.getElementById("username").value = "";
      if (document.getElementById("password")) document.getElementById("password").value = "";
    });
  }

  toonLoginStatus();
  updateCartCounter();
});

function updateCartCounter() {
  const winkelwagen = JSON.parse(localStorage.getItem("winkelwagen")) || [];
  const counter = document.getElementById("winkelwagen-counter");
  if (counter) counter.innerText = winkelwagen.length;
}

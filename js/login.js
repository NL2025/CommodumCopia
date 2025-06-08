document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const logoutBtn = document.getElementById("logout-btn");
  const welkomBericht = document.getElementById("welkom-bericht");
  const authLink = document.getElementById("auth-link");

  function toonLoginStatus() {
    const gebruiker = localStorage.getItem("gebruiker");
    if (gebruiker) {
      if (authLink) authLink.innerText = "Uitloggen";
      if (logoutBtn) logoutBtn.style.display = "block";
      if (welkomBericht) welkomBericht.textContent = "Welkom, " + gebruiker + "!";
    } else {
      if (authLink) authLink.innerText = "Inloggen";
      if (logoutBtn) logoutBtn.style.display = "none";
      if (welkomBericht) welkomBericht.textContent = "";
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
        alert("Succesvol ingelogd!");
        window.location.href = "index.html";
      } else {
        alert("Gebruikersnaam en wachtwoord moeten minstens 3 tekens zijn.");
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      localStorage.removeItem("gebruiker");
      toonLoginStatus();
      alert("Uitgelogd.");
      window.location.href = "index.html";
    });
  }

  toonLoginStatus();
});

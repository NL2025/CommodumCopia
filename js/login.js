document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const logoutBtn = document.getElementById("logout-btn");
  const welkomBericht = document.getElementById("welkom-bericht");
  const authLink = document.getElementById("auth-link");

  function toonLoginStatus() {
    const gebruiker = localStorage.getItem("gebruiker");

    if (gebruiker) {
      if (authLink) {
        authLink.innerText = "Uitloggen";
        authLink.href = "#"; // حتى لا يعيد تحميل الصفحة
        authLink.addEventListener("click", function (e) {
          e.preventDefault();
          localStorage.removeItem("gebruiker");
          if (loginForm) loginForm.style.display = "block";
          if (logoutBtn) logoutBtn.style.display = "none";
          if (welkomBericht) welkomBericht.textContent = "";
          authLink.innerText = "Inloggen";
          authLink.href = "inloggen.html";
        });
      }
      if (loginForm) loginForm.style.display = "none";
      if (logoutBtn) logoutBtn.style.display = "block";
      if (welkomBericht) welkomBericht.textContent = "Welkom!";
    } else {
      if (authLink) {
        authLink.innerText = "Inloggen";
        authLink.href = "inloggen.html";
      }
      if (loginForm) loginForm.style.display = "block";
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
        toonLoginStatus(); // ← يقوم بالتحديث مباشرة
      } else {
        alert("Gebruikersnaam en wachtwoord moeten minstens 3 tekens zijn.");
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      localStorage.removeItem("gebruiker");
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
      toonLoginStatus();
    });
  }

  toonLoginStatus();
});

const form = document.getElementById("login-form");
const logoutBtn = document.getElementById("logout-btn");
const welkomBericht = document.getElementById("welkom-bericht");

const gebruiker = localStorage.getItem("gebruiker");
if (gebruiker) {
  form.style.display = "none";
  logoutBtn.style.display = "inline-block";
  welkomBericht.textContent = `Welkom terug, ${gebruiker}!`;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "1234") {
    localStorage.setItem("gebruiker", username);
    alert("Inloggen geslaagd!");
    location.reload();
  } else {
    alert("Ongeldige gebruikersnaam of wachtwoord.");
  }
});

logoutBtn.addEventListener("click", function () {
  localStorage.removeItem("gebruiker");
  alert("Je bent uitgelogd.");
  location.reload();
});

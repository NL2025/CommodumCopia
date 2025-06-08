const form = document.getElementById("login-form");
const logoutBtn = document.getElementById("logout-btn");
const welkomBericht = document.getElementById("welkom-bericht");

function toonStatus() {
  const gebruiker = localStorage.getItem("gebruiker");
  if (gebruiker) {
    form.style.display = "none";
    logoutBtn.style.display = "inline-block";
    welkomBericht.textContent = `Welkom terug, ${gebruiker}!`;
  } else {
    form.style.display = "block";
    logoutBtn.style.display = "none";
    welkomBericht.textContent = "";
  }
}

toonStatus();

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (username !== "" && password !== "") {
    localStorage.setItem("gebruiker", username);
    toonStatus();
  } else {
    alert("Vul zowel gebruikersnaam als wachtwoord in.");
  }
});

logoutBtn.addEventListener("click", function () {
  localStorage.removeItem("gebruiker");
  toonStatus();
});

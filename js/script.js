document.addEventListener("DOMContentLoaded", function () {
    const loginLink = document.getElementById("login-link");

    function updateLoginStatus() {
        const isLoggedIn = localStorage.getItem("loggedIn");
        if (isLoggedIn) {
            loginLink.textContent = "Uitloggen";
            loginLink.href = "#";
            loginLink.onclick = function () {
                localStorage.removeItem("loggedIn");
                alert("Je bent uitgelogd.");
                location.reload();
            };
        } else {
            loginLink.textContent = "Inloggen";
            loginLink.href = "login.html";
            loginLink.onclick = null;
        }
    }

    updateLoginStatus();

    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Simpele validatie
            if (username && password) {
                localStorage.setItem("loggedIn", "true");
                alert("Succesvol ingelogd!");
                window.location.href = "index.html";
            } else {
                alert("Vul je gebruikersnaam en wachtwoord in.");
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const loginLink = document.getElementById("login-link");

    function updateLoginStatus() {
        const isLoggedIn = localStorage.getItem("loggedIn");
        if (isLoggedIn) {
            loginLink.textContent = "Uitloggen";
            loginLink.href = "#";
            loginLink.onclick = function () {
                localStorage.removeItem("loggedIn");
                alert("Je bent uitgelogd.");
                location.reload();
            };
        } else {
            loginLink.textContent = "Inloggen";
            loginLink.href = "login.html";
            loginLink.onclick = null;
        }
    }

    updateLoginStatus();

    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Simpele validatie
            if (username && password) {
                localStorage.setItem("loggedIn", "true");
                alert("Succesvol ingelogd!");
                window.location.href = "index.html";
            } else {
                alert("Vul je gebruikersnaam en wachtwoord in.");
            }
        });
    }
});

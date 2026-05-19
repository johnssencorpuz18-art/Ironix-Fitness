<?php require_once "auth_helpers.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login - IRONIX</title>
  <link rel="stylesheet" href="Css/style.css?v=40">
</head>
<body>
  <header>
    <?php render_nav("login"); ?>
  </header>

  <main class="auth-page">
    <section class="auth-panel">
      <div class="auth-copy">
        <span class="eyebrow">Member Access</span>
        <h2>Keep your progress tied to your account.</h2>
        <p>Free visitors can preview IRONIX. Members unlock workout logging, personal progress, and the full diet database.</p>
      </div>

      <div class="auth-forms">
        <form id="loginForm" class="login-box auth-box login-auth-box">
          <span class="eyebrow">Returning Member</span>
          <h3>Log In</h3>
          <p class="auth-note">Access your saved workouts and progress dashboard.</p>

          <input id="loginEmail" type="email" placeholder="Email" required>
          <input id="loginPassword" type="password" placeholder="Password" required>
          <button class="login-button" type="submit">Log In</button>
          <p id="loginMessage" aria-live="polite"></p>
        </form>

        <form id="registerForm" class="login-box auth-box signup-auth-box">
          <span id="signup"></span>
          <span class="eyebrow">New Member</span>
          <h3>Sign Up</h3>
          <p class="auth-note">Unlock all IRONIX tools and start saving your training data.</p>

          <input id="registerName" type="text" placeholder="Full Name" required>
          <input id="registerEmail" type="email" placeholder="Email" required>
          <input id="registerPassword" type="password" placeholder="Password min. 6 characters" required>
          <button class="signup-button" type="submit">Create Account</button>
          <ul class="signup-benefits">
            <li>Workout logging</li>
            <li>Progress history</li>
            <li>Diet food details</li>
          </ul>
          <p id="registerMessage" aria-live="polite"></p>
        </form>
      </div>
    </section>
  </main>

  <script>
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      submitAuth("login.php", {
        email: document.getElementById("loginEmail").value,
        password: document.getElementById("loginPassword").value
      }, "loginMessage");
    });

    registerForm.addEventListener("submit", function (event) {
      event.preventDefault();
      submitAuth("register.php", {
        name: document.getElementById("registerName").value,
        email: document.getElementById("registerEmail").value,
        password: document.getElementById("registerPassword").value
      }, "registerMessage");
    });

    function submitAuth(url, fields, messageId) {
      const body = new URLSearchParams(fields);

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body
      })
        .then(response => response.text().then(message => ({ ok: response.ok, message })))
        .then(result => {
          document.getElementById(messageId).textContent = result.message;

          if (result.ok) {
            window.location.href = "workouts.php?onboarding=1";
          }
        })
        .catch(() => {
          document.getElementById(messageId).textContent = "Unable to connect to the server.";
        });
    }
  </script>
</body>
</html>

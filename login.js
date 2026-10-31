// ST TRUSTDATA - LOGIN SYSTEM

const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");
const loginButton = document.getElementById("loginButton");

loginForm.addEventListener("submit", async function(event) {
  event.preventDefault();

  const email = document.getElementById("loginEmail")
    .value.trim();

  const password = document.getElementById("loginPassword")
    .value;

  loginButton.disabled = true;
  loginButton.textContent = "Logging in...";

  message.style.color = "#0756a5";
  message.textContent = "Please wait...";

  try {
    await firebase.auth().signInWithEmailAndPassword(
      email,
      password
    );

    message.style.color = "green";
    message.textContent = "Login successful!";

    localStorage.setItem("loggedIn", "true");

    setTimeout(function() {
      window.location.href = "index.html";
    }, 1000);

  } catch (error) {
    message.style.color = "red";

    const errors = {
      "auth/user-not-found":
        "No account found with this email.",

      "auth/wrong-password":
        "Incorrect password.",

      "auth/invalid-credential":
        "Incorrect email or password.",

      "auth/invalid-email":
        "Please enter a valid email.",

      "auth/network-request-failed":
        "Network error. Check your internet."
    };

    message.textContent =
      errors[error.code] || "Login failed. Please try again.";

  } finally {
    loginButton.disabled = false;
    loginButton.textContent = "Login";
  }
});￼Enter

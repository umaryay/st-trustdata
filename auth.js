// ST TRUSTDATA - USER REGISTRATION

const registerForm = document.getElementById("registerForm");
const message = document.getElementById("message");
const registerButton = document.getElementById("registerButton");

if (!registerForm || !message || !registerButton) {
  console.error("Registration HTML elements not found.");
} else {

  registerForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (fullName.length < 2) {
      message.textContent = "Please enter your full name.";
      return;
    }

    if (password.length < 6) {
      message.textContent = "Password must contain at least 6 characters.";
      return;
    }

    registerButton.disabled = true;
    registerButton.textContent = "Creating Account...";
    message.textContent = "Please wait...";

    try {
      const result = await firebase.auth()
        .createUserWithEmailAndPassword(email, password);

      await result.user.updateProfile({
        displayName: fullName
      });

      message.style.color = "green";
      message.textContent = "Account created successfully!";

      registerForm.reset();

      await firebase.auth().signOut();

      setTimeout(function() {
        window.location.href = "login.html";
      }, 2000);

    } catch (error) {
      console.error("Registration error:", error);

      message.style.color = "red";

      const errors = {
        "auth/email-already-in-use": "This email already has an account.",
        "auth/invalid-email": "Please enter a valid email address.",
        "auth/weak-password": "Please choose a stronger password.",
        "auth/network-request-failed": "Network error. Check your internet connection.",
        "auth/operation-not-allowed": "Email registration is not enabled."
      };

      message.textContent =
        errors[error.code] || "Registration failed: " + error.message;

    } finally {
      registerButton.disabled = false;
      registerButton.textContent = "Create Account";
    }
  });
  }

// Check if passwords match
function checkPasswordsMatch () {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const passwordMatchText = document.getElementById("password-match");

    if (password.value !== confirmPassword.value) {
        passwordMatchText.textContent = "*Passwords do not match";
        password.classList.add("password-red-outline")
        confirmPassword.classList.add("password-red-outline");
        return false;
    } else {
        passwordMatchText.textContent = "";
        password.classList.remove("password-red-outline");
        confirmPassword.classList.remove("password-red-outline");
        return true;
    }
}
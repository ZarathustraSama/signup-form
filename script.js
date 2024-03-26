document.addEventListener("DOMContentLoaded", () => {
  const confirm_password = document.getElementById("confirm-password");

  confirm_password.addEventListener("input", () => {
    const password = document.getElementById("password");
    const warning_span = document.getElementsByClassName("hidden-warning")[0];

    if (password.value !== confirm_password.value) {
      warning_span.style.display = "block";
      password.style.borderColor = "red";
      confirm_password.style.borderColor = "red";
    }
    else {
      warning_span.style.display = 'none';
      password.style.borderColor = "green";
      confirm_password.style.borderColor = "green";
    };
  })
});
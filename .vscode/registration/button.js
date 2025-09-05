username.addEventListener("input", () => {
  usernameError.innerHTML = "";
  if (username.value.length < 2) {
    usernameError.innerHTML = "Ism uzunligi 2 ta belgidan uzun bo'lishi kerak.";
  }
});

email.addEventListener("input", () => {
  emailError.innerHTML = "";
  if (!email.value.includes("@")) {
    emailError.innerHTML = "Email manzil noto'g'ri.";
  }
});

password.addEventListener("input", () => {
  passwordError.innerHTML = "";
  if (password.value.length < 8) {
    passwordError.innerHTML = "Parol kamida 8 belgidan iborat bo'lishi kerak.";
  }
});

confirmpassword.addEventListener("input", () => {
  confirmPasswordError.innerHTML = "";
  if (password.value !== confirmpassword.value) {
    confirmPasswordError.innerHTML = "Parol va tasdiqlash paroli bir xil bo'lishi kerak.";
  }
});



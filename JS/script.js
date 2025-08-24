const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formMsg.style.color = "green";
  formMsg.textContent = "پیام شما با موفقیت ارسال شد ✅";
  form.reset();
  setTimeout(() => formMsg.textContent = "", 5000);
});

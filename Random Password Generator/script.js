const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyEl = document.querySelector(".fa-copy");
const alertEl = document.querySelector(".alertContainer");

btnEl.addEventListener("click", () => {
  createPassword();
});
copyEl.addEventListener("click", () => {
  copyPassword();
  alertEl.classList.remove("active");
  setTimeout(() => {
    alertEl.classList.add("active");
  }, 3000);
});
function createPassword() {
  const chars =
    "012678EFGHIJKLMNOPQRS9ab&*(){}[]cdef345ghijklmnoABCDTUVWXYZ!@#$%^pqrstuvwxyz";
  const passLen = 14;
  let password = "";
  for (let i = 1; i <= passLen; i++) {
    const randomNum = Math.floor(Math.random() * passLen);
    password = password + chars.substring(randomNum, randomNum + 1);
  }
  inputEl.value = password;
}
function copyPassword() {
  inputEl.select();
  inputEl.setSelectionRange(0, 500);
  navigator.clipboard.writeText(inputEl.value);
}

const button = document.getElementById("button");
let checkbox = document.getElementById("checkbox");
button.disabled = true;

checkbox.addEventListener("change", () => {
  checkbox.checked === true
    ? (button.disabled = false)
    : (button.disabled = true);
});

button.addEventListener(`click`, () => {
  if (checkbox.checked) {
    window.location.href = "benchmark.html";
  }
});
console.log(checkbox);

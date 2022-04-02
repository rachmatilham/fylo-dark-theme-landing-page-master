const form = document.querySelector("form");
const inputElement = form.firstElementChild;
const errorElement = form.firstElementChild.nextElementSibling;

form.lastElementChild.addEventListener("click", (event) => {
  let result = inputElement.checkValidity();
  if (result === false || inputElement.value === "") {
    event.preventDefault();
    inputElement.classList.add("active");
    inputElement.style.outline = "none";
    errorElement.classList.add("active");
  } else if (result) {
    inputElement.classList.remove("active");
    errorElement.classList.remove("active");
  }
});

inputElement.addEventListener("focus", (event) => {
  inputElement.classList.remove("active");
  errorElement.classList.remove("active");
});

const btn = document.querySelectorAll(".btn")
const ratingValue = document.querySelector(".rating-value") as HTMLTitleElement

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function() {
      const value = btn[i].childNodes[0].textContent
      ratingValue.innerHTML = value!
    });
}
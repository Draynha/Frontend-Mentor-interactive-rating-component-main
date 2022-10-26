const btn = document.querySelectorAll(".btn")
const ratingValue = document.querySelector(".rating-value") as HTMLTitleElement
const btnsubmit = document.querySelector(".btn-submit-rating")
const ratingDiv = document.querySelector(".rating-div") as HTMLDivElement
const resultDiv = document.querySelector(".result-div") as HTMLDivElement
const warnElement = document.querySelector(".warn") as HTMLParagraphElement

btn.forEach((button) => {

  button.addEventListener('click', () => {
    
    btn.forEach((styleRemove =>{
      styleRemove.removeAttribute('style')
    }))
    
    ratingValue.innerHTML = button.childNodes[0].textContent!
    const selectedBtn = button as HTMLButtonElement
    selectedBtn.style.background = "hsl(216, 12%, 54%)"

  });
});

btnsubmit!.addEventListener('click', () => {

if(ratingValue.textContent !== '0'){
  ratingDiv.style.display = "none"
  resultDiv.style.display = "block"
} else {
  warnElement.style.display = "block"
}

});
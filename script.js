"use strict";
const btn = document.querySelectorAll(".btn");
const ratingValue = document.querySelector(".rating-value");
const btnsubmit = document.querySelector(".btn-submit-rating");
const ratingDiv = document.querySelector(".rating-div");
const resultDiv = document.querySelector(".result-div");
const warnElement = document.querySelector(".warn");
btn.forEach((button) => {
    button.addEventListener('click', () => {
        btn.forEach((styleRemove => {
            styleRemove.removeAttribute('style');
        }));
        ratingValue.innerHTML = button.childNodes[0].textContent;
        const selectedBtn = button;
        selectedBtn.style.background = "hsl(216, 12%, 54%)";
    });
});
btnsubmit.addEventListener('click', () => {
    if (ratingValue.textContent !== '0') {
        ratingDiv.style.display = "none";
        resultDiv.style.display = "block";
    }
    else {
        warnElement.style.display = "block";
    }
});

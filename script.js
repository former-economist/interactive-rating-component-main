const thankYou = document.getElementsByClassName("thank-you-state")[0]
const rating = document.getElementsByClassName("rating-state")[0]
const form = document.getElementsByClassName("form-container")[0]

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const selector = "input[name=rating]:checked"
    const checkedInput = document.querySelector(selector)

    if(checkedInput !== null){
        const selectedRating = document.querySelector(".result")
        selectedRating.textContent = `You selected ${checkedInput.getAttribute("value")} out of 5`
        rating.classList.add("hidden")
        thankYou.classList.remove("hidden")
    }
})
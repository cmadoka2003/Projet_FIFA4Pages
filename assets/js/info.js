document.addEventListener("DOMContentLoaded", function () {

    let bloc4_previous = document.querySelector("#Bloc_4-fleche_g");
    let bloc4_next = document.querySelector("#Bloc_4-fleche_d");

    bloc4_next.addEventListener("click", () => {
        const sliderContent = document.querySelector(".carrousel");
        sliderContent.scrollLeft += 1750;
    })

    bloc4_previous.addEventListener("click", () => {
        const sliderContent = document.querySelector(".carrousel");
        sliderContent.scrollLeft -= 1750;
    })

})
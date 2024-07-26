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

    const menu = document.querySelector("#phone")
    let phonemenu = document.querySelector(".phonemenu")

    menu.addEventListener("click", () => {
        const widthPhone = document.querySelector("#app-container").offsetWidth
        if (widthPhone == 425) {
            if (phonemenu.style.display === "block") {
                phonemenu.style.display = "none";
            } else {
                phonemenu.style.display = "block"
            }
        }
    })

})
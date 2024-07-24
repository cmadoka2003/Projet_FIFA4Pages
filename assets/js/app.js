document.addEventListener("DOMContentLoaded", function () {

    let bloc1_previous = document.querySelector("#Bloc_1-fleche_g");
    let bloc1_next = document.querySelector("#Bloc_1-fleche_d");

    bloc1_next.addEventListener("click", () => {
        const widthSlider = document.querySelector(".slider").offsetWidth;
        const sliderContent = document.querySelector(".slider_content");
        sliderContent.scrollLeft += widthSlider;
    })

    bloc1_previous.addEventListener("click", () => {
        const widthSlider = document.querySelector(".slider").offsetWidth;
        const sliderContent = document.querySelector(".slider_content");
        sliderContent.scrollLeft -= widthSlider;
    })

///////////////////////////////////////////////////////////////////////////////////


    let bloc4_previous = document.querySelector("#Bloc_4-fleche_g");
    let bloc4_next = document.querySelector("#Bloc_4-fleche_d");

    bloc4_next.addEventListener("click", () => {
        const sliderContent = document.getElementsByClassName("carrousel")[0];
        sliderContent.scrollLeft += 1750;
    })

    bloc4_previous.addEventListener("click", () => {
        const sliderContent = document.getElementsByClassName("carrousel")[0];
        sliderContent.scrollLeft -= 1750;
    })

///////////////////////////////////////////////////////////////////////////////////


    let bloc5_previous = document.querySelector("#Bloc_5-fleche_g");
    let bloc5_next = document.querySelector("#Bloc_5-fleche_d");

    bloc5_next.addEventListener("click", () => {
        const sliderContent = document.getElementsByClassName("carrousel")[1];
        sliderContent.scrollLeft += 1750;
    })

    bloc5_previous.addEventListener("click", () => {
        const sliderContent = document.getElementsByClassName("carrousel")[1];
        sliderContent.scrollLeft -= 1750;
    })

///////////////////////////////////////////////////////////////////////////////////

    let bloc7_previous = document.querySelector("#Bloc_7-fleche_g");
    let bloc7_next = document.querySelector("#Bloc_7-fleche_d");

    bloc7_next.addEventListener("click", () => {
        const sliderContent = document.querySelector(".maillot_carrousel");
        sliderContent.scrollLeft += 1750;
    })

    bloc7_previous.addEventListener("click", () => {
        const sliderContent = document.querySelector(".maillot_carrousel");
        sliderContent.scrollLeft -= 1750;
    })

///////////////////////////////////////////////////////////////////////////////////

    let bloc8_previous = document.querySelector("#Bloc_8-fleche_g");
    let bloc8_next = document.querySelector("#Bloc_8-fleche_d");

    bloc8_next.addEventListener("click", () => {
        const sliderContent = document.getElementsByClassName("carrousel")[2]
        sliderContent.scrollLeft += 1750;
    })

    bloc8_previous.addEventListener("click", () => {
        const sliderContent = document.getElementsByClassName("carrousel")[2]
        sliderContent.scrollLeft -= 1750;
    })

///////////////////////////////////////////////////////////////////////////////////

    let bloc10_previous = document.querySelector("#Bloc_10-fleche_g");
    let bloc10_next = document.querySelector("#Bloc_10-fleche_d");

    bloc10_next.addEventListener("click", () => {
        const sliderContent = document.querySelector(".index_carrousel");
        sliderContent.scrollLeft += 1750;
    })

    bloc10_previous.addEventListener("click", () => {
        const sliderContent = document.querySelector(".index_carrousel");
        sliderContent.scrollLeft -= 1750;
    })

///////////////////////////////////////////////////////////////////////////////////

    let bloc12_previous = document.querySelector("#Bloc_12-fleche_g");
    let bloc12_next = document.querySelector("#Bloc_12-fleche_d");

    bloc12_next.addEventListener("click", () => {
        const sliderContent = document.querySelector(".inside_carrousel");
        sliderContent.scrollLeft += 1750;
    })

    bloc12_previous.addEventListener("click", () => {
        const sliderContent = document.querySelector(".inside_carrousel");
        sliderContent.scrollLeft -= 1750;
    })

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");

            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }



})
document.addEventListener("DOMContentLoaded", function () {

    let bloc1_previous = document.querySelector("#Bloc_1-fleche_g");
    let bloc1_next = document.querySelector("#Bloc_1-fleche_d");

    bloc1_next.addEventListener("click", () => {
        const wilderSlider = document.querySelector(".slider").offsetWidth;
        const sliderContent = document.querySelector(".slider_content");
        sliderContent.scrollLeft += wilderSlider;
    })

    bloc1_previous.addEventListener("click", () => {
        const wilderSlider = document.querySelector(".slider").offsetWidth;
        const sliderContent = document.querySelector(".slider_content");
        sliderContent.scrollLeft -= wilderSlider;
    })

    ///////////////////////////////////////////////////////////////////////////////////


    let bloc4_previous = document.querySelector("#Bloc_4-fleche_g");
    let bloc4_next = document.querySelector("#Bloc_4-fleche_d");

    bloc4_next.addEventListener("click", () => {
        const wilderSlider = document.querySelector(".Bloc_4").offsetWidth;
        const sliderContent = document.getElementsByClassName("carrousel")[0];
        sliderContent.scrollLeft += wilderSlider;
    })

    bloc4_previous.addEventListener("click", () => {
        const wilderSlider = document.querySelector(".Bloc_4").offsetWidth;
        const sliderContent = document.getElementsByClassName("carrousel")[0];
        sliderContent.scrollLeft -= wilderSlider;
    })

    ///////////////////////////////////////////////////////////////////////////////////


    let bloc5_previous = document.querySelector("#Bloc_5-fleche_g");
    let bloc5_next = document.querySelector("#Bloc_5-fleche_d");

    bloc5_next.addEventListener("click", () => {
        const wilderSlider = document.querySelector(".Bloc_5").offsetWidth;
        const sliderContent = document.getElementsByClassName("carrousel")[1];
        sliderContent.scrollLeft += wilderSlider;
    })

    bloc5_previous.addEventListener("click", () => {
        const wilderSlider = document.querySelector(".Bloc_5").offsetWidth;
        const sliderContent = document.getElementsByClassName("carrousel")[1];
        sliderContent.scrollLeft -= wilderSlider;
    })

    ///////////////////////////////////////////////////////////////////////////////////

    let bloc7_previous = document.querySelector("#Bloc_7-fleche_g");
    let bloc7_next = document.querySelector("#Bloc_7-fleche_d");

    bloc7_next.addEventListener("click", () => {
        const wilderSlider = document.querySelector(".Bloc_7").offsetWidth;
        const sliderContent = document.querySelector(".maillot_carrousel");
        sliderContent.scrollLeft += wilderSlider;
    })

    bloc7_previous.addEventListener("click", () => {
        const wilderSlider = document.querySelector(".Bloc_7").offsetWidth
        const sliderContent = document.querySelector(".maillot_carrousel");
        sliderContent.scrollLeft -= wilderSlider;
    })

    ///////////////////////////////////////////////////////////////////////////////////

    let bloc8_previous = document.querySelector("#Bloc_8-fleche_g");
    let bloc8_next = document.querySelector("#Bloc_8-fleche_d");

    bloc8_next.addEventListener("click", () => {
        const wilderSlider = document.querySelector(".Bloc_8").offsetWidth
        const sliderContent = document.getElementsByClassName("carrousel")[2]
        sliderContent.scrollLeft += wilderSlider;
    })

    bloc8_previous.addEventListener("click", () => {
        const wilderSlider = document.querySelector(".Bloc_8").offsetWidth
        const sliderContent = document.getElementsByClassName("carrousel")[2]
        sliderContent.scrollLeft -= wilderSlider;
    })

    ///////////////////////////////////////////////////////////////////////////////////

    let bloc10_previous = document.querySelector("#Bloc_10-fleche_g");
    let bloc10_next = document.querySelector("#Bloc_10-fleche_d");

    bloc10_next.addEventListener("click", () => {
        const wilderSlider = document.querySelector(".Bloc_10").offsetWidth
        const sliderContent = document.querySelector(".index_carrousel");
        sliderContent.scrollLeft += wilderSlider;
    })

    bloc10_previous.addEventListener("click", () => {
        const wilderSlider = document.querySelector(".Bloc_10").offsetWidth
        const sliderContent = document.querySelector(".index_carrousel");
        sliderContent.scrollLeft -= wilderSlider;
    })

    ///////////////////////////////////////////////////////////////////////////////////

    let bloc12_previous = document.querySelector("#Bloc_12-fleche_g");
    let bloc12_next = document.querySelector("#Bloc_12-fleche_d");

    bloc12_next.addEventListener("click", () => {
        const wilderSlider = document.querySelector(".Bloc_12").offsetWidth
        const sliderContent = document.querySelector(".inside_carrousel");
        sliderContent.scrollLeft += wilderSlider;
    })

    bloc12_previous.addEventListener("click", () => {
        const wilderSlider = document.querySelector(".Bloc_12").offsetWidth
        const sliderContent = document.querySelector(".inside_carrousel");
        sliderContent.scrollLeft -= wilderSlider;
    })


    ///////////////////////////////////////////////////////////////////////////////////

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
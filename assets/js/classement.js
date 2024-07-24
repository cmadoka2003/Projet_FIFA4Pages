document.addEventListener("DOMContentLoaded", function () {

    let button = document.querySelector(".discover");
    let classement = document.querySelectorAll(".plus");

    button.addEventListener("click", () => {
        for (let i = 0; i < classement.length; i++) {
                if (classement[i].style.display === "block") {
                    classement[i].style.display = "none";
                    button.textContent = "Voir plus"

                } else {
                    classement[i].style.display = "block";
                    button.textContent = "Voir moins"
                }
        }
    });

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
const attachEventToHamburgerButton = document.querySelector(".dropdown__hamburger i");
attachEventToHamburgerButton.addEventListener("click", function () {
    document.querySelector(".dropdown__content").classList.toggle("visible");
});

const attachEventToColorButtons = document.querySelectorAll(".dropdown__content button");
attachEventToColorButtons.forEach(button => button.addEventListener("click", function () {
    document.querySelector(".dropdown__content").classList.toggle("visible");
}));

const bodyElement = document.querySelector(".home-background");

const changeBackgroundColor = function (color) {
    const colorButton = document.querySelector(color[0]);
    colorButton.addEventListener("click", function () {
        bodyElement.className = color[1];
        document.querySelector(".body__title").innerHTML = color[2];
    });
}
changeBackgroundColor([".grey", "grey", "Home"]);
changeBackgroundColor([".turquoise", "turquoise", "Turquoise"]);
changeBackgroundColor([".lavender", "lavender", "Lavender"]);
changeBackgroundColor([".babyBlue", "babyBlue", "Baby blue"]);
changeBackgroundColor([".salmon", "salmon", "Salmon"]);
const carousels = document.querySelectorAll(".carousel");

for (let carouselIndex = 0; carouselIndex < carousels.length; carouselIndex++) {
    const carousel = carousels[carouselIndex];
    const items = carousel.querySelectorAll(".carousel_item");
    const buttonsHTML = Array.from(items, () => {
        return `<span class="carousel_button"></span>`;
    });

    carousel.insertAdjacentHTML("beforeend", `
        <div class="carousel_nav">
            ${buttonsHTML.join("")}
        </div>
    `);

    const buttons = carousel.querySelectorAll(".carousel_button");

    for (let buttonIndex = 0; buttonIndex < buttons.length; buttonIndex++) {
        const button = buttons[buttonIndex];
        button.addEventListener('click', () => {
            for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
                items[itemIndex].classList.remove("carousel_item_selected");
            }
            for (let buttonIndex = 0; buttonIndex < buttons.length; buttonIndex++) {
                buttons[buttonIndex].classList.remove("carousel_button_selected");
            }

            items[buttonIndex].classList.add("carousel_item_selected");
            button.classList.add("carousel_button_selected");
        });
    }

    items[0].classList.add("carousel_item_selected");
    buttons[0].classList.add("carousel_button_selected");
}

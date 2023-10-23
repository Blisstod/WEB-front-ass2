document.querySelectorAll(".carousel").forEach(carousel => {

    const items = carousel.querySelectorAll(".carousel_item");

    const buttonsHTML = Array.from(items, () => {
        return `<span class="carousel_button"></span>`
    });
    carousel.insertAdjacentHTML("beforeend", `
    <div class="carousel_nav">
        ${buttonsHTML.join("")}
    </div>
    `)

    const buttons = carousel.querySelectorAll(".carousel_button")
    buttons.forEach((button, i) => {
        button.addEventListener('click', () => {
            items.forEach(item => item.classList.remove("carousel_item_selected"));
            buttons.forEach(button => button.classList.remove("carousel_button_selected"))

            items[i].classList.add("carousel_item_selected")
            button.classList.add("carousel_button_selected")
        }); 
    });

    items[0].classList.add("carousel_item_selected")
    buttons[0].classList.add("carousel_button_selected")
});
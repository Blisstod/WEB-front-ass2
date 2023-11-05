$(document).ready(function () {
    $(".carousel").each(function () {
        const $carousel = $(this);
        const $items = $carousel.find(".carousel_item");
        let buttonsHTML = $items.map(function () {
            return '<span class="carousel_button"></span>';
        }).get().join("");

        $carousel.append(`
            <div class="carousel_nav">
                ${buttonsHTML}
            </div>
        `);

        const $buttons = $carousel.find(".carousel_button");

        $buttons.each(function (buttonIndex) {
            $(this).on('click', function () {
                $items.removeClass("carousel_item_selected");
                $buttons.removeClass("carousel_button_selected");

                $items.eq(buttonIndex).addClass("carousel_item_selected");
                $(this).addClass("carousel_button_selected");
            });
        });
        
        $items.first().addClass("carousel_item_selected");
        $buttons.first().addClass("carousel_button_selected");
    });
});

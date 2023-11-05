$(document).ready(function() {
    let likeSound = $("#likeSound")[0];

    function handleLike(likeButton, likeCounter, isLiked, counter) {
        likeButton.on('click', function() {
            if (!isLiked) {
                isLiked = true;
                counter++;
                likeCounter.text(counter);
                likeSound.play();
            } else {
                isLiked = false;
                counter--;
                likeCounter.text(counter);
            }
        });
    }

    handleLike($("#likeButton1"), $("#likeCounter1"), false, 0);
    handleLike($("#likeButton2"), $("#likeCounter2"), false, 0);
    handleLike($("#likeButton3"), $("#likeCounter3"), false, 0);
    handleLike($("#likeButton4"), $("#likeCounter4"), false, 0);
});



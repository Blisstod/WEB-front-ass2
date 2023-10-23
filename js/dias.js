likeButton1 = document.getElementById("likeButton1")
likeCounter1 = document.getElementById("likeCounter1")
let counter1 = 0
let isLiked1 = false
likeButton1.addEventListener('click', () => {
    if (!isLiked1) {
        isLiked1 = true
        counter1++
        likeCounter1.innerText = counter1
    } else {
        isLiked1 = false
        counter1--
        likeCounter1.innerText = counter1
    }
})

likeButton2 = document.getElementById("likeButton2")
likeCounter2 = document.getElementById("likeCounter2")
let counter2 = 0
let isLiked2 = false
likeButton2.addEventListener('click', () => {
    if (!isLiked2) {
        isLiked2 = true
        counter2++
        likeCounter2.innerText = counter2
    } else {
        isLiked2 = false
        counter2--
        likeCounter2.innerText = counter2
    }
})

likeButton3 = document.getElementById("likeButton3")
likeCounter3 = document.getElementById("likeCounter3")
let counter3 = 0
let isLiked3 = false
likeButton3.addEventListener('click', () => {
    if (!isLiked3) {
        isLiked3 = true
        counter3++
        likeCounter3.innerText = counter3
    } else {
        isLiked3 = false
        counter3--
        likeCounter3.innerText = counter3
    }
})

likeButton4 = document.getElementById("likeButton4")
likeCounter4 = document.getElementById("likeCounter4")
let counter4 = 0
let isLiked4 = false
likeButton4.addEventListener('click', () => {
    if (!isLiked4) {
        isLiked4 = true
        counter4++
        likeCounter4.innerText = counter4
    } else {
        isLiked4 = false
        counter4--
        likeCounter4.innerText = counter4
    }
    
})





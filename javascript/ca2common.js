function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    //targets all the elements with the class '.reveal'

    for (var i = 0; i < reveals.length; i++) {
        var elementTop = reveals[i].getBoundingClientRect().top;
        /* getBoundingClientRect().top gives us this distance of the element from the top of the viewport*/
        if (elementTop < 800) {
            reveals[i].classList.add("activereveal");
        //when the distance of the element from the top of the viewport gets less than 800, it will add the class .activereveal
        } else {
            reveals[i].classList.remove("activereveal");
        }
    }
}
window.addEventListener("scroll", reveal);
//event listener to run everytime the page scrolls

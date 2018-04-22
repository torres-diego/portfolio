const work = document.querySelector(".work__section");

function workSlideIn(e) {
    const slideIn = window.scrollY + window.innerHeight - work.offsetHeight / 4;

    const workBottom = work.offsetTop + work.offsetHeight;
    const halfShown = slideIn > work.offsetTop;
    const notScrolledPast = window.scrollY < workBottom;

    if (halfShown && notScrolledPast) {
        work.classList.add("slidInFull");
    } else {
        work.classList.remove("slidInFull");
    }
}

window.addEventListener("scroll", workSlideIn);
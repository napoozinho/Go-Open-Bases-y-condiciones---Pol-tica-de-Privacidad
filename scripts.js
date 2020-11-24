function readMore(order) {

    let dots = document.querySelector(`.seeMoreContent[order="${order}"] .dots`);
    let moreText = document.querySelector(`.seeMoreContent[order="${order}"] .more`); 
    let btnText = document.querySelector(`.seeMoreContent[order="${order}"] .seeMore`);

    if (moreText.style.display != "none") {
        btnText.textContent = "Más información…";
        btnText.style.marginBottom = "30px";
        moreText.style.display = "none";
    } else {
        moreText.style.display = "none";
        btnText.style.marginBottom = "5px";
        btnText.textContent = "Menos información…"; 
        moreText.style.display = "block";
    }
}
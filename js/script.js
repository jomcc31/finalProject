function showImages() {
    var images = document.querySelectorAll(".galleryImg");
    var icon = document.querySelector("i");

    if(icon.className == "fa fa-angle-up") {
        icon.className = "fa fa-angle-down";

        images.forEach(function (img, index) {
            setTimeout(function () {
                img.style.display = "block";
            }, index * 500); 
        });
    }

    else {
        icon.className = "fa fa-angle-up";

        images.forEach(function (img, index) {
            setTimeout(function () {
                img.style.display = "none";
            }, index * 500); 
        });
    }

}
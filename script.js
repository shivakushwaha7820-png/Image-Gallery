var images = document.querySelectorAll(".item img");

var lightbox = document.getElementById("lightbox");

var lightboxImage = document.getElementById("lightboxImage");

var currentIndex = 0;

// Open Lightbox

images.forEach(function(image, index) {

    image.addEventListener("click", function() {

        currentIndex = Array.from(images).indexOf(image);

        showImage();

        lightbox.style.display = "flex";

    });

});

// Show Image

function showImage() {

    lightboxImage.src = images[currentIndex].src;

}

// Next and Previous

function changeImage(direction) {

    currentIndex = currentIndex + direction;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    showImage();

}

// Close Lightbox

function closeLightbox() {

    lightbox.style.display = "none";

}

// Filter Images

function filterImages(category, button) {

    var items = document.querySelectorAll(".item");

    items.forEach(function(item) {

        if (category === "all" || item.dataset.category === category) {

            item.style.display = "block";

        } else {

            item.style.display = "none";

        }

    });

    document.querySelectorAll(".filters button").forEach(function(btn) {
        btn.classList.remove("active");
    });

    button.classList.add("active");

}
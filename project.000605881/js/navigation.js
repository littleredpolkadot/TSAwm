const scrollToTopBtn = document.querySelector(".scroll-to-top-btn");
const headerBottom = document.querySelector(".header-bottom");
const stickyOffset = headerBottom.offsetTop;

document.addEventListener("scroll", (e) => {
  if (window.scrollY >= stickyOffset) {
    headerBottom.classList.add("fixed");
    scrollToTopBtn.classList.add("show");
  } else {
    headerBottom.classList.remove("fixed");
    scrollToTopBtn.classLisemove("show");
  }
});

// create references to the modal...
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('myImages');
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = document.getElementsByClassName("img1")[i].src;
    captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
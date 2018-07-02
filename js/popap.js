 
var link = document.querySelector(".contacts-btn");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");


link.addEventListener("click", function (evt) {
evt.preventDefault();
    popup.classList.add("modal-show");
  });
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });

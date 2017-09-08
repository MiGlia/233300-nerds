var link = document.querySelector(".btn-write-us");

var popup = document.querySelector(".modal-write-us");

var close = popup.querySelector(".modal-close");

var myname = popup.querySelector("[name=write-name]");

var form = popup.querySelector("form");

var mail = popup.querySelector("[name=write-email]");

var textarea = popup.querySelector("[name=comments]");

var storage = localStorage.getItem("username");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    myname.value = storage;
    mail.value = storage;
    textarea.focus();
  }
  else {
    myname.focus();
  };

});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");

});
form.addEventListener("submit", function (evt) {
  if (!mail.value || !myname.value || !textarea.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    console.log("Нужно ввести имя и почту");
    popup.classList.add("modal-error");
  } else {
    LocalStorage.setItem("username", myname.value);
    LocalStorage.setItem("mailname", mail.value);
  };

});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");

    };
  };

});

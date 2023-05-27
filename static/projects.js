function changeColor(button) {
  var buttons = document.querySelectorAll(".project-name-31");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("clicked");
  }
  button.classList.add("clicked");
}
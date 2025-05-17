const button = document.querySelectorAll(".button");
const body = document.querySelector("body");

button.forEach(function (button) {
  //console.log(button)
  button.addEventListener("click", function (e) {
    //body.classList.toggle('dark-mode')
    //console.log(e);
    //console.log(e.target);
    switch (e.target.id) {
      case "blue":
        body.style.backgroundColor = "#180161";
        break;
      case "yellow":
        body.style.backgroundColor = "#4F1787";
        break;
      case "red":
        body.style.backgroundColor = "#EB3678";
        break;
      case "pink":
        body.style.backgroundColor = "#FB773C";
        break;
      default:
        // Optional: Handle cases where the id doesn't match any of the above
        break;
    }
  });
});

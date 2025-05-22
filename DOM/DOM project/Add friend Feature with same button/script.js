let card_status = document.querySelector("h5");
let btn = document.querySelector("#add_btn")
var check = 0;
btn.addEventListener("click", () => {
  if (check == 0) {
    card_status.innerHTML = "Friend";
    card_status.style.color = "#7CFC00";
    btn.innerHTML="Remove"
    check = 1;
  } else {
    card_status.innerHTML = "Stranger";
    card_status.style.color = "#e3242b";
    btn.innerHTML="Add Friend"
    check=0;
  }
});

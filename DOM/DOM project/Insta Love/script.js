let card = document.querySelector("#card");
let love = document.querySelector(".ri-heart-2-fill");

card.addEventListener("dblclick", () => {
  love.style.transform = "translate(-50%,-50%) scale(1)";
   setTimeout(() => {
    love.style.transform = "translate(-50%, -50%) scale(0)";
    love.style.opacity = 0;
  }, 800);
});

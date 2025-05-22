var arr = [
  {
    dp: "https://images.pexels.com/photos/18110917/pexels-photo-18110917/free-photo-of-model-posing-in-white-suit-and-sneakers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    story:
      "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    dp: "https://images.pexels.com/photos/16921837/pexels-photo-16921837/free-photo-of-man-in-black-suit-sitting-with-camera.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    story:
      "https://images.pexels.com/photos/14898799/pexels-photo-14898799.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    dp: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    story:
      "https://images.pexels.com/photos/3124330/pexels-photo-3124330.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    dp: "https://images.pexels.com/photos/7994400/pexels-photo-7994400.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    story:
      "https://images.pexels.com/photos/4782314/pexels-photo-4782314.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    dp: "https://images.pexels.com/photos/31556439/pexels-photo-31556439/free-photo-of-elegant-woman-posing-in-stylish-modern-outfit.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    story:
      "https://images.pexels.com/photos/31261864/pexels-photo-31261864/free-photo-of-fashion-model-posing-with-magazine-against-yellow-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    dp: "https://images.pexels.com/photos/17160334/pexels-photo-17160334/free-photo-of-beautiful-model-with-sunglasses-in-beige-top.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    story:
      "https://images.pexels.com/photos/26828913/pexels-photo-26828913/free-photo-of-portrait-of-woman-in-blouse-and-skirt.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];
var clutter = "";
arr.forEach((e, i) => {
  clutter += `<div class="story"><img id="${i}" src="${e.dp}" alt=""></div>`;
});

var storiyan = document.querySelector("#storiyan");
storiyan.innerHTML = clutter;

storiyan.addEventListener("click", (e) => {
  document.querySelector("#full_screen").style.display = "block";
  document.querySelector("#full_screen").style.backgroundImage = `url(${
    arr[e.target.id].story
  })`;
  setTimeout(()=>{ document.querySelector("#full_screen").style.display = "none";},3000)
});

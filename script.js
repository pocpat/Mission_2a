// ---IDEAS----------
// buttons: - BG color -  - generate new-
// click on 2 === words => they disappear ?
// add more sticky-mans

//  ***********************************

//-1--change BG color ---- VVVVVVVVVVVVVVVVVVVVVVV
const pmBtn = document.getElementById("pm");
// console.log(pmBtn);
pmBtn.addEventListener("mouseover", changeBackground);
pmBtn.addEventListener("mouseleave", changeBackground);

function changeBackground() {
  // console.log("in changefn");
  if (document.body.style.background == "orange") {
    document.body.style.background = "rgb(242, 240, 228)";
  } else {
    document.body.style.background = "orange";
  }
}

//--2----change button color -----VVVVVVVVVVVVVVVV
const wnBtn = document.getElementById("wn");
// console.log(pmBtn);
wnBtn.addEventListener("mouseover", function () {
  wnBtn.style.background = "purple";
});
wnBtn.addEventListener("mouseleave", function () {
  wnBtn.style.background = "#a8dbd2";
});

//  ------ to add more sticky mans----------------VVVVVVVVVVVVVVVVV
const stickiManImg = document.getElementById("walkingPic");
stickiManImg.addEventListener("click", function () {
  document.querySelector(".anim").innerHTML =
    `<img id="walkingPic" src="img/8765.gif" alt="Walking Stickman" />` +
    `<img id="walkingPic" src="img/8765.gif" alt="Walking Stickman" />` +
    `<img id="walkingPic" src="img/8765.gif" alt="Walking Stickman" />` +
    ` <img id="walkingPic" src="img/8765.gif" alt="Walking Stickman" />` +
    `<img id="walkingPic" src="img/8765.gif" alt="Walking Stickman" />` +
    `<img id="walkingPic" src="img/8765.gif" alt="Walking Stickman" />` +
    `<img id="walkingPic" src="img/8765.gif" alt="Walking Stickman" />` +
    `<img id="walkingPic" src="img/8765.gif" alt="Walking Stickman" />` +
    `<img id="walkingPic" src="img/8765.gif" alt="Walking Stickman" />` +
    ` <img id="walkingPic" src="img/8765.gif" alt="Walking Stickman" />` +
    `<img id="walkingPic" src="img/8765.gif" alt="Walking Stickman" />` +
    `<img id="walkingPic" src="img/8765.gif" alt="Walking Stickman" />`;
});

// // // ---------- BG with gradient
// const gdBtn = document.getElementById("gd");
// // console.log(gdBtn);
// function gradualColors() {
//   const colorArray = [
//     "linear-gradient(0deg, red, blue)",
//     "linear-gradient(90deg, red, blue)",
//     "linear-gradient(180deg, red, blue)",
//     "linear-gradient(270deg, red, blue)",
//   ];
//   document.querySelector(".nav_brown").innerHTML.style.background =
//     colorArray[currentColour]; // brown #271d0d
// }
// if (currentColour === colorArray.length - 1) {
//   currentColour = 0;
// } else {
//   currentColour++;
// }

//     "linear-gradient(150deg, red, blue)",
//     "linear-gradient(45deg, yellow, gray)",
//     "linear-gradient(90deg, green, black)",
//     "linear-gradient(120deg, orange, pink)",

//      ---------grad colors ref-------------------
//      "linear-gradient(150deg, red, blue)",
//     "linear-gradient(45deg, yellow, gray)",
//     "linear-gradient(90deg, green, black)",
//     "linear-gradient(120deg, orange, pink)",

// gdBtn.addEventListener("click", function () {
//   document.querySelector(".nav_brown").innerHTML = gradualColors();
// });
// wnBtn.addEventListener("mouseleave", function () {
//   wnBtn.style.background = "#a8dbd2";
// });

//

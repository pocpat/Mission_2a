// ---IDEAS----------
// buttons: - BG color -  - generate new-
// click on 2 === words => they disappear ?
// add more sticky-mans

//  ***********************************

//-1--change BG color ---- XXXXXXXXXXXXXXXXXX
const pmBtn = document.getElementById("pm");
// console.log(pmBtn);
pmBtn.addEventListener("mouseover", changeBackground());
pmBtn.addEventListener("mouseleave", changeBackground());

function changeBackground() {
  // console.log("in changefn");
  if (document.body.style.background == "#F2F0E4") {
    document.body.style.background = "#fbbb5a";
  } else {
    document.body.style.background = "#F2F0E4";
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
let gdBtn = document.getElementById("gd");
let stickiManImg = document.getElementById("walkingPic");

let i = 0;
gdBtn.addEventListener("click", function () {
  i++;
  let imgNode = document.createElement("img"); // is a node
  imgNode.id = "walkingPic" + " " + i;
  imgNode.src = "img/8765.gif";
  imgNode.alt = "Walking Stickman";

  document.querySelector(".anim").appendChild(imgNode);
});

let niBtn = document.getElementById("ni");
niBtn.addEventListener("click", function () {
  let anim = document.querySelector(".anim");
  anim.removeChild(anim.firstElementChild);
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

// ------- create new buttons -----
//  === create an array of colors=== //
// const colors = ["#3175b6", "#82b3de", "#fbbb5a", "#a8dbd2", "#ee4734"];
// const namesBtn = ["PRESS ME", "WELL, NO", "G`DAY!", "NAILED IT", "KABOOM"];
// //  == loop over the colors === //
// for (let i = 0; i < namesBtn.length; i++) {
//   const button = document.createElement("button");
//   button.style.backgroundColor = colors[i];
//   button.innerText = namesBtn[i];
//   document.getElementById("newBtns").appendChild(button);
// }
//

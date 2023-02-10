// ---IDEAS----------
// WELL, NO - BG color
// click on 2 === words => they disappear
// add more sticky-mans
// fill form on 1 click

//  *****************Nothing works*******************

//---change BG color
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

// //------change button color
const wnBtn = document.getElementById("wn");
console.log(pmBtn);
wnBtn.addEventListener("mouseover", function () {
  wnBtn.style.background = "purple";
});
wnBtn.addEventListener("mouseleave", function () {
  wnBtn.style.background = "#a8dbd2";
});

// // ---------- BG with gradient
// function gradualColors() {
//   const colorArray = [
//     "linear-gradient(150deg, red, blue)",
//     "linear-gradient(45deg, yellow, gray)",
//     "linear-gradient(90deg, green, black)",
//     "linear-gradient(120deg, orange, pink)",
//   ];

//   if (currentColour === colorArray.length - 1) {
//     currentColour = 0;
//   } else {
//     currentColour++;
//     }

//     document.body.style.background = colorArray[currentColour];

//-------------- fill form
let submitButton = document.getElementById("submitBtn");
submitButton.addEventListener("click", function () {
  document.getElementById("input1").placeholder = "Vavava";
  document.getElementById("input2").placeholder = "Kokoko";
  document.getElementById("email").placeholder = "Vava@koko.com";
  document.getElementById("num").placeholder = "123456789";
});

// -----------make every second word - blue  mouse over Tree pic-------
// const para = document.querySelector("p.r2c2").innerHTML;

//  ------ to add more sticky mans----------------
// const onePic = document.getElementById("walkingPic");
// onePic.addEventListener("click", function () {
//   document.getElementsByClassName(".anim") = onePic + onePic;
// });

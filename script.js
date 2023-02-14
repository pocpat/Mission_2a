//-1--change BG color ---- VVVVVVVVVVVVVV
const pmBtn = document.getElementById("pm");
console.log(pmBtn);

pmBtn.addEventListener("mouseover", function () {
  document.body.style.background = "#fbbb5a";
});

pmBtn.addEventListener("mouseleave", function () {
  document.body.style.background = "#f2f0e4";
});

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


// ------------wordsSeparator();---------------VVVVVVVVVVVV

let kbBtn = document.getElementById("kb");
let strPara = document.getElementById("separate").innerHTML;

kbBtn.addEventListener("click", function () {
  let separated = (document.getElementById("separate").innerHTML =
    strPara.split(""));
});
kbBtn.addEventListener("dblclick", function () {
  let combined = (document.getElementById("separate").innerHTML = strPara);
});

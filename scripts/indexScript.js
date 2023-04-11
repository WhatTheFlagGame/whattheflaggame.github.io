
  function landscape(){
 var isDown1 = false;
var isDown2 = false;
var isDown3 = false;

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

var dropdown1 = document.getElementById("dropdown1");
var dropdown2 = document.getElementById("dropdown2");
var dropdown3 = document.getElementById("dropdown3");

btn1.addEventListener("click", function() {
  isDown1 = !isDown1;
  isDown2 = false;
  isDown3 = false;
  dropdown2.style.height = "0";
  dropdown3.style.height = "0";
  if (isDown1) {
    dropdown1.style.height = "80%";
  } else {
    dropdown1.style.height = "0";
  }
});
btn2.addEventListener("click", function() {
  isDown2 = !isDown2;
  isDown1 = false;
  isDown3 = false;
  dropdown1.style.height = "0";
  dropdown3.style.height = "0";
  if (isDown2) {
    dropdown2.style.height = "80%";
  } else {
    dropdown2.style.height = "0";
  }
});
btn3.addEventListener("click", function() {
  isDown3 = !isDown3;
  isDown1 = false;
  isDown2 = false;
  dropdown1.style.height = "0";
  dropdown2.style.height = "0";
  if (isDown3) {
    dropdown3.style.height = "80%";
  } else {
    dropdown3.style.height = "0";
  }
});

  }


  function portrait(){
 var isDown1 = false;
var isDown2 = false;
var isDown3 = false;

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

var dropdown1 = document.getElementById("dropdown1");
var dropdown2 = document.getElementById("dropdown2");
var dropdown3 = document.getElementById("dropdown3");

btn1.addEventListener("click", function() {
  isDown1 = !isDown1;
  isDown2 = false;
  isDown3 = false;
  dropdown2.style.height = "0";
  dropdown3.style.height = "0";
  if (isDown1) {
    dropdown1.style.height = "70%";
  } else {
    dropdown1.style.height = "0";
  }
});
btn2.addEventListener("click", function() {
  isDown2 = !isDown2;
  isDown1 = false;
  isDown3 = false;
  dropdown1.style.height = "0";
  dropdown3.style.height = "0";
  if (isDown2) {
    dropdown2.style.height = "60%";
  } else {
    dropdown2.style.height = "0";
  }
});
btn3.addEventListener("click", function() {
  isDown3 = !isDown3;
  isDown1 = false;
  isDown2 = false;
  dropdown1.style.height = "0";
  dropdown2.style.height = "0";
  if (isDown3) {
    dropdown3.style.height = "60%";
  } else {
    dropdown3.style.height = "0";
  }
});
  }

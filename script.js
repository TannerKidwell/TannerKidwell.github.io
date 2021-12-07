"use strict";

function changeLight(e) {
   document.getElementById("light").src = "stoplightgreen.jpg"; } 

function myMove(event) { 
  var elem = document.getElementById("racer1");
  var elem2 = document.getElementById("racer2");
  var pos = 0;
  var pos2 = 0;

function shuffle(array) {
  var currentIndex = array.length, temp, randomIndex;
   
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1; 
    temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
return array;
}

var speedArray = [2, 4, 6, 8, 10];

shuffle(speedArray);
var speed = speedArray[0];
var speed2 = speedArray[1];
  
var id = setInterval(racer1, speed);
var id2 = setInterval(racer2, speed2);

var end = (window.innerWidth - 200);
   
function racer1() {
    if (pos == end) {
       clearInterval(id);
       clearInterval(id2);
       document.getElementById("winner").src = "rabbitwin.jpg";
       img.style.visibility = "visible";
     } 
    else {
      pos++;
      elem.style.left = pos + 'px'; }
}
function racer2() { 
    if (pos2 == end) {
       clearInterval(id);
       clearInterval(id2);
       document.getElementById("winner2").src = "turtlewin.jpg";
       img.style.visibility = "visible";
    } 
   else {
      pos2++;
      elem2.style.left = pos2 + 'px'; }
}
}
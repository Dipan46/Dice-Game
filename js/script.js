// Generating random number
let randNum1 = Math.floor(Math.random() * 6 + 1);
let randNum2 = Math.floor(Math.random() * 6 + 1);

// Choosing image
let randDiceImg1 = "dice" + randNum1 + ".png";
let randDiceImg2 = "dice" + randNum2 + ".png";

// Setting image source
let randomDiceImgSoc1 = "images/" + randDiceImg1;
let randomDiceImgSoc2 = "images/" + randDiceImg2;

// Selecting specific tag
let img1 = document.querySelectorAll("img")[0];
let img2 = document.querySelectorAll("img")[1];

// Changing attribute
img1.setAttribute("src", randomDiceImgSoc1);
img2.setAttribute("src", randomDiceImgSoc2);

// Massage
if (randNum1 > randNum2)
    document.querySelector("h1").innerHTML = "Player1 Wins!";
else if (randNum2 > randNum1)
    document.querySelector("h1").innerHTML = "Player2 Wins!";
else
    document.querySelector("h1").innerHTML = "It's a draw!";
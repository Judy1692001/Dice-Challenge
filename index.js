var random1 = Math.floor( Math.random() * 6 ) + 1;  //left dice

var diceimage1 = "dice" + random1 + ".png";

var path1 = "images/" + diceimage1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , path1);

var random2 = Math.floor(Math.random()*6) + 1;  //right dice

var diceimage2 = "dice" + random2 + ".png";

var path2 = "images/" + diceimage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src" , path2);


if(random1===random2)
{
    document.querySelector("h1").innerText = "Draw!";
}
else if(random1>random2)
{
    document.querySelector("h1").innerText = "🚩 Player 1 Wins!";
}
else
{
    document.querySelector("h1").innerText = "🚩 Player 2 Wins!";
}
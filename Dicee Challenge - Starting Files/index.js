


var number1 = Math.floor(Math.random()*6 + 1);
var number2 = Math.floor(Math.random()*6 + 1);
var string = "./images/dice"+number1+".png";
var string2 = "./images/dice"+number2+".png";


document.querySelector(".img1").setAttribute("src",string);
document.querySelector(".img2").setAttribute("src",string2);

if(number1>number2){
    document.querySelector("h1").textContent = "Player 1 Won!!!!"
}else if(number1<number2){
    document.querySelector("h1").textContent = "Player 2 Won!!!!"
}else{
    document.querySelector("h1").textContent = "It is a tie!!!!"
}



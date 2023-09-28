const button=document.querySelector("button");
const diceNum=document.querySelector("h1");
const diceTag=document.getElementById("dice1");
const diceTag2=document.getElementById("dice2");

button.addEventListener("click",roll);
function roll(){
    const dice1=Math.floor(Math.random() * 7);
    const dice2=Math.floor(Math.random() * 7);
    diceNum.textContent=`Total two Dice:${dice1+dice2}`;
    diceTag.textContent=`Dice 1 Num: ${dice1}`;
    diceTag2.textContent=`Dice 2 num: ${dice2}`;



}                                                                               
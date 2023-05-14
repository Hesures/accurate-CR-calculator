const numberOfCharacters = document.querySelector("#numberOfCharacters");
const levelOfCharacters = document.querySelector("#levelOfCharacters");
const numberOfMonsters = document.querySelector("#numberOfMonsters");
const xpOfMonsters = document.querySelector("#xpOfMonsters");

const calculate = document.querySelector("#calculate");

calculate.addEventListener("click", function (){
    console.log(numberOfCharacters.value * levelOfCharacters.value);    
    console.log(numberOfMonsters.value * xpOfMonsters.value);
});

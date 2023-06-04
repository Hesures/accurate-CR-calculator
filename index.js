const numberOfCharacters = document.querySelector("#numberOfCharacters");
const levelOfCharacters = document.querySelector("#levelOfCharacters");
const numberOfMonsters = document.querySelector("#numberOfMonsters");
const xpOfMonsters = document.querySelector("#xpOfMonsters");
const crOfMonsters = document.querySelector("#crOfMonsters");

const result = document.querySelector("#result");

// -------------- BUTTONS -------------------- 
const activeXP = document.querySelector(".activeXP");
const activeCR = document.querySelector(".activeCR");
const calculateXP = document.querySelector(".calculateXP");
const calculateCR = document.querySelector(".calculateCR");

// -------------- CHARTS -------------------- 

var divXPMonsters = document.querySelector(".div_XPMonsters");
var divCRMonsters = document.querySelector(".div_CRMonsters");

var chartOfXP = 
[/*lvl 1*/[25,50,75,100],
/*lvl 2*/[50,100,150,200],
/*lvl 3*/[75,150,225,400],
/*lvl 4*/[125,250,375,500],
/*lvl 5*/[250,500,750,1100],
/*lvl 6*/[300,600,900,1400],
/*lvl 7*/[350,750,1100,1700],
/*lvl 8*/[450,900,1400,2100],
/*lvl 9*/[550,1100,1600,2400],
/*lvl 10*/[600,1200,1900,2800],
/*lvl 11*/[800,1600,2400,3600],
/*lvl 12*/[1000,2000,3000,4500],
/*lvl 13*/[1100,2200,3400,5100],
/*lvl 14*/[1250,2500,3800,5700],
/*lvl 15*/[1400,2800,4300,6400],
/*lvl 16*/[1600,3200,4800,7200],
/*lvl 17*/[2000,3900,5900,8800],
/*lvl 18*/[2100,4200,6300,9500],
/*lvl 19*/[2400,4900,7300,10900],
/*lvl 20*/[2800,5700,8500,12700]];

var chartOfCR = 
[/*CR 0*/ 10,
/*CR 1/8*/ 25,
/*CR 1/4*/ 50,
/*CR 1/2*/ 100,
/*CR 1*/ 200,
/*CR 2*/ 450,
/*CR 3*/ 700,
/*CR 4*/ 1100,
/*CR 5*/ 1800,
/*CR 6*/ 2300,
/*CR 7*/ 2900,
/*CR 8*/ 3900,
/*CR 9*/ 5000,
/*CR 10*/ 5900,
/*CR 11*/ 7200,
/*CR 12*/ 8400,
/*CR 13*/ 10000,
/*CR 14*/ 11500,
/*CR 15*/ 13000,
/*CR 16*/ 15000,
/*CR 17*/ 18000,
/*CR 18*/ 20000,
/*CR 19*/ 22000,
/*CR 20*/ 25000,
/*CR 21*/ 33000,
/*CR 22*/ 41000,
/*CR 23*/ 50000,
/*CR 24*/ 62000,
/*CR 30*/ 155000];


calculateXP.addEventListener("click", function (){
    
    // number of difficulty (Easy, Medium, Hard, Deadly) per level
    var difficultyPerLevel = chartOfXP[levelOfCharacters.value-1]; 

    // quantity/value of the number of characters
    var quantity = numberOfCharacters.value;
    var totalXPMonsters = numberOfMonsters.value * xpOfMonsters.value; // Total XP of monsters

    if (totalXPMonsters < quantity * difficultyPerLevel[0]) {
        result.innerHTML="<h2>Trivial</h2>";
        result.removeAttribute("class");
        result.classList.add("trivial");
    } else if (totalXPMonsters < quantity * difficultyPerLevel[1]) {
        result.innerHTML="<h2>Fácil</h2>";
        result.removeAttribute("class");
        result.classList.add("easy");
    }else if (totalXPMonsters < (quantity * difficultyPerLevel[2])) {
        result.innerHTML="<h2>Normal</h2>";
        result.removeAttribute("class");
        result.classList.add("medium");
    }else if (totalXPMonsters < (quantity * difficultyPerLevel[3])) {
        result.innerHTML="<h2>Difícil</h2>";
        result.removeAttribute("class");
        result.classList.add("hard");
    }if (totalXPMonsters >= (quantity * difficultyPerLevel[3])) {
        result.innerHTML="<h2>Mortal</h2>"; 
        result.removeAttribute("class");
        result.classList.add("deadly");
    }
});

// calculateCR.addEventListener("click", function () {

// })

// -------------- TOGGLE BUTTONS XP/CR -------------------- 

activeXP.addEventListener("click", function () {
    activeXP.classList.add("hidden");
    activeCR.classList.remove("hidden");
    
    divXPMonsters.classList.add("hidden");
    divCRMonsters.classList.remove("hidden");

    calculateXP.classList.add("hidden");
    calculateCR.classList.remove("hidden");
});

activeCR.addEventListener("click", function () {
    activeXP.classList.remove("hidden");
    activeCR.classList.add("hidden");

    divXPMonsters.classList.remove("hidden");
    divCRMonsters.classList.add("hidden");

    calculateXP.classList.remove("hidden");
    calculateCR.classList.add("hidden");
});
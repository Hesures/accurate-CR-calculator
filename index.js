const numberOfCharacters = document.querySelector("#numberOfCharacters");
const levelOfCharacters = document.querySelector("#levelOfCharacters");
const numberOfMonsters = document.querySelector("#numberOfMonsters");
const xpOfMonsters = document.querySelector("#xpOfMonsters");

const calculate = document.querySelector("#calculate");

var chartOfDifficulty = 
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


calculate.addEventListener("click", function (){
    
    // number of difficulty (Easy, Medium, Hard, Deadly) per level
    var difficultyPerLevel = chartOfDifficulty[levelOfCharacters.value-1]; 

    // quantity/value of the number of characters
    var quantity = numberOfCharacters.value;
    var totalXPMonsters = numberOfMonsters.value * xpOfMonsters.value; // Total XP of monsters

    // CON IF
    if (totalXPMonsters < quantity * difficultyPerLevel[0]) {
        console.log("Trivial");
    };
    if ((totalXPMonsters >= quantity * difficultyPerLevel[0]) && totalXPMonsters < quantity * difficultyPerLevel[1]) {
        console.log("Easy");
    };
    if (totalXPMonsters >= (quantity * difficultyPerLevel[1]) && totalXPMonsters < (quantity * difficultyPerLevel[2])) {
        console.log("Medium");
    };
    if (totalXPMonsters >= (quantity * difficultyPerLevel[2]) && totalXPMonsters < (quantity * difficultyPerLevel[3])) {
        console.log("Hard");     
    };
    if (totalXPMonsters >= (quantity * difficultyPerLevel[3])) {
        console.log("Deadly");   
    }

    // ¿Introducir un foreach de difficultyPerLevel?
    // ¿También se podría construir usando los datos introducidos como parámetros de una función? Ej: function (x, y), donde x e y son nivel, array, xp, etc... 
    
    });

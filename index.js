const numberOfCharacters = document.querySelector("#numberOfCharacters");
const levelOfCharacters = document.querySelector("#levelOfCharacters");
const numberOfMonsters = document.querySelector("#numberOfMonsters");
const xpOfMonsters = document.querySelector("#xpOfMonsters");

const calculate = document.querySelector("#calculate");

// calculate.addEventListener("click", function (){
//     console.log(numberOfCharacters.value * levelOfCharacters.value);    
//     console.log(numberOfMonsters.value * xpOfMonsters.value);
// });

var chartOfDificulty = [/*1*/[25,50,75,100],
                        /*2*/[50,100,150,200],
                        /*3*/[75,150,225,400],
                        /*4*/[125,250,375,500],
                        /*5*/[250,500,750,1100],
                        /*6*/[300,600,900,1400],
                        /*7*/[350,750,1100,1700],
                        /*8*/[450,900,1400,2100],
                        /*9*/[550,1100,1600,2400],
                        /*10*/[600,1200,1900,2800],
                        /*11*/[800,1600,2400,3600],
                        /*12*/[1000,2000,3000,4500],
                        /*13*/[1100,2200,3400,5100],
                        /*14*/[1250,2500,3800,5700],
                        /*15*/[1400,2800,4300,6400],
                        /*16*/[1600,3200,4800,7200],
                        /*17*/[2000,3900,5900,8800],
                        /*18*/[2100,4200,6300,9500],
                        /*19*/[2400,4900,7300,10900],
                        /*20*/[2800,5700,8500,12700]];


// calculate.addEventListener("click", function (){
//     console.log(chartOfDificulty[levelOfCharacters.value-1]);
// });

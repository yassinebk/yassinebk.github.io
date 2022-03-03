const gameEndedWon = document.querySelector("#end-game-success")
const gameEndedLost = document.querySelector("#end-game-failure")
const playAgain = document.querySelector(".btn");
let leftAttempt = 3;
function endGameMessageClear()  { 
    gameEndedWon.style.display = "none";
    gameEndedLost.style.display = "none";
    playAgain.style.display = "none";

}
 


function verifyNumber(generatedNumber,answer) { 
    return generatedNumber == answer;

}
 function gameRunning() { 

     endGameMessageClear();
    leftAttempt = 10;
    while (leftAttempt>0)
    { 
        const generatedNumber= Math.floor(Math.random() * 10);
         
        const response = prompt("insert a number between 1 and 10");
         console.log(parseInt(response));
         if(isNaN(parseInt(response)) ||response===null) { 
            console.log("here"); 
             continue;
        }
         else { 
             if (verifyNumber(generatedNumber, response)) { 
                 alert("Good job you have won"); 
                 gameEndedWon.style.display = "block";
                 playAgain.style.display="block"
                 break;
                 
            }
             else { 
                     leftAttempt--;
                 if (leftAttempt === 0) { gameEndedLost.style.display = "block";playAgain.style.display="block" }
                     alert(`you have only ${leftAttempt} attempts left`)
            }
        }
        
    }
}
window.onload = gameRunning;

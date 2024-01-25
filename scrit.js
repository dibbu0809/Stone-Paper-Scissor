let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const Uscore = document.querySelector("#user-score");
const Cscore = document.querySelector("#com-score");
const msg = document.querySelector("#msg");

const drawGame = ()=>{
    console.log("Game was Draw");
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor = "#081b31";

}

const showWinner = (userWin, userchoice, compChoice)=>{
    if(userWin){
        userScore++;
        Uscore.innerText =  userScore;
        msg.innerText = `You Win! your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    
    }else{
        comScore++;
        Cscore.innerText = comScore;
        msg.innerText = `You Loose! ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "Red";

        }
}
const genCompChoice = () =>{
     const option = ["Stone", "paper", "scissors"];
     const randIdx = Math.floor(Math.random()*3);
     return option[randIdx];
};
const playGame = (userchoice) =>{
   
    const compChoice = genCompChoice();
   

    if(userchoice === compChoice){
        drawGame();
    }else{
     let userWin = true;
     if(userchoice === "Stone"){
        userWin = compChoice === "paper" ? false : true;
    }else if(userchoice === "paper"){
        userWin = compChoice === "scissors" ? false : true;
    } else{
        userWin = compChoice === "stone" ? false : true;
    }
    showWinner(userWin, userchoice, compChoice);
  }
 }




choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
        
    })
})
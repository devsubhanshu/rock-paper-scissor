let userchoice = 0;
let compchoice = 0;

const Choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "game was draw ";
  msg.style.background = "yellow";
};

showWinner = (userWin) => {
  if (userWin) {
    userScorePara.innerText = Number(userScorePara.textContent) + 1;
    msg.innerText = "you win!";
    msg.style.background = "green";
  } else {
    compScorePara.innerText = Number(compScorePara.textContent) + 1;

    msg.innerText = "you lose!";
    msg.style.background = "red";
  }
};

const playgame = (userChoice) => {
  console.log("user Choice =", userChoice);
  // genrate comuter choise
  const compChoice = genCompChoice();
  console.log("comp Choice=", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissors ,paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock ,scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // paper ,rock
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};
Choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playgame(userChoice);
  });
});

const elements = {
  buttons: {
    rock: document.querySelector("#rockBtn"),
    scissors: document.querySelector("#scissorsBtn"),
    paper: document.querySelector("#paperBtn"),
  },
  user: {
    rock: document.querySelector("#userRock"),
    paper: document.querySelector("#userResultPaper"),
    scissors: document.querySelector("#userResultScissors"),
  },
  cpu: {
    start: document.querySelector("#cpuRock"),
    rock: document.querySelector("#cpuResultRock"),
    paper: document.querySelector("#cpuResultPaper"),
    scissors: document.querySelector("#cpuResultScissors"),
  },
  text: {
    title: document.querySelector("#titleText"),
    userWin: document.querySelector("#userWinText"),
    cpuWin: document.querySelector("#cpuwinText"),
    draw: document.querySelector("#drawText"),
  },
};

let userScore = 0;
let cpuScore = 0;

// Function to update the display
function updateDisplay(userChoice, cpuChoice, result) {
  // Reset user and CPU selections
  Object.values(elements.user).forEach((el) => (el.style.display = "none"));
  Object.values(elements.cpu).forEach((el) => (el.style.display = "none"));
  Object.values(elements.text).forEach((el) => (el.style.display = "none"));

  // Show selected user option
  elements.user[userChoice].style.display = "block";

  // Show selected CPU option or fallback to the starting image
  if (
    cpuChoice === "rock" ||
    cpuChoice === "paper" ||
    cpuChoice === "scissors"
  ) {
    elements.cpu[cpuChoice].style.display = "block";
  } else {
    elements.cpu.start.style.display = "block";
  }

  // Display the result
  elements.text[result].style.display = "block";
}

// Event handler for game logic
function playGame(userChoice) {
  const cpuChoices = ["rock", "paper", "scissors"];
  const cpuChoice = cpuChoices[Math.floor(Math.random() * 3)];

  // Determine result
  let result;
  if (userChoice === cpuChoice) {
    result = "draw";
  } else if (
    (userChoice === "rock" && cpuChoice === "scissors") ||
    (userChoice === "scissors" && cpuChoice === "paper") ||
    (userChoice === "paper" && cpuChoice === "rock")
  ) {
    result = "userWin";
  } else {
    result = "cpuWin";
  }

  // Update display based on choices and result
  updateDisplay(userChoice, cpuChoice, result);
}

// Add event listeners
elements.buttons.rock.addEventListener("click", () => playGame("rock"));
elements.buttons.scissors.addEventListener("click", () => playGame("scissors"));
elements.buttons.paper.addEventListener("click", () => playGame("paper"));

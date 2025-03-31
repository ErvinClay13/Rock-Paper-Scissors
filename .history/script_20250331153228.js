// Get references to all required DOM elements for interaction and display
const elements = {
  buttons: {
    rock: document.querySelector("#rockBtn"),        // Rock button
    scissors: document.querySelector("#scissorsBtn"),// Scissors button
    paper: document.querySelector("#paperBtn"),      // Paper button
  },
  user: {
    rock: document.querySelector("#userRock"),               // User rock image
    paper: document.querySelector("#userResultPaper"),       // User paper image
    scissors: document.querySelector("#userResultScissors"), // User scissors image
  },
  cpu: {
    start: document.querySelector("#cpuRock"),               // Default CPU image
    rock: document.querySelector("#cpuResultRock"),          // CPU rock image
    paper: document.querySelector("#cpuResultPaper"),        // CPU paper image
    scissors: document.querySelector("#cpuResultScissors"),  // CPU scissors image
  },
  text: {
    title: document.querySelector("#titleText"),     // Title text
    userWin: document.querySelector("#userWinText"), // User win message
    cpuWin: document.querySelector("#cpuwinText"),   // CPU win message
    draw: document.querySelector("#drawText"),       // Draw message
  },
};

// Initialize scores
let userScore = 0;
let cpuScore = 0;

/**
 * Updates the visuals on screen based on the user's and CPU's choices,
 * as well as the result (userWin, cpuWin, draw).
 */
function updateDisplay(userChoice, cpuChoice, result) {
  // Hide all previous selections and messages
  Object.values(elements.user).forEach((el) => (el.style.display = "none"));
  Object.values(elements.cpu).forEach((el) => (el.style.display = "none"));
  Object.values(elements.text).forEach((el) => (el.style.display = "none"));

  // Show the user's selected hand
  elements.user[userChoice].style.display = "block";

  // Show the CPU's selected hand, or default if something went wrong
  if (
    cpuChoice === "rock" ||
    cpuChoice === "paper" ||
    cpuChoice === "scissors"
  ) {
    elements.cpu[cpuChoice].style.display = "block";
  } else {
    elements.cpu.start.style.display = "block";
  }

  // Show the game result message
  elements.text[result].style.display = "block";
}

/**
 * Main function to handle the game logic when a user selects a choice.
 * Randomly generates a CPU choice, determines the winner, and updates the UI.
 */
function playGame(userChoice) {
  const cpuChoices = ["rock", "paper", "scissors"];
  const cpuChoice = cpuChoices[Math.floor(Math.random() * 3)];

  // Determine the result based on the standard rules
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

  // Update the UI to reflect the current game state
  updateDisplay(userChoice, cpuChoice, result);
}

// Add click event listeners to each button to start the game with the chosen option
elements.buttons.rock.addEventListener("click", () => playGame("rock"));
elements.buttons.scissors.addEventListener("click", () => playGame("scissors"));
elements.buttons.paper.addEventListener("click", () => playGame("paper"));

// --- Capstone Challenge: Dragon Rune Adventure ---

// Constructor for Player
class Player {
  constructor(name, species) {
    // Set up player properties
    this.name = name;
    this.species = species;
    this.runes = [];
    this.xp = 0;
  }
  // Method to add a rune to the player's collection
  addRune(rune) {
    this.runes.push(rune);
  }
  // Method to lose 1 XP (never goes below 0)
  loseXP() {
    if (this.xp > 0) {
      this.xp -= 1;
    }
  }
  // Method to gain 1 XP
  gainXP() {
    this.xp += 1;
  }
  // Method to get a summary of the player's stats
  getStats() {
    return `${this.name} (${this.species}) | XP: ${this.xp} | Runes: ${this.runes.join(", ") || "None"}`;
  }
}

// Array of possible rune choices (each is an object)
const runeChoices = [
  { name: "Rune of Fire", power: "Flame" },
  { name: "Rune of Ice", power: "Freeze" },
  { name: "Rune of Wisdom", power: "Knowledge" },
  { name: "Rune of Shadows", power: "Stealth" }
];

// Utility function: returns a random integer from minimum up to (but not including) max
const randInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// Utility function: displays the player's stats in the HTML page
const showStats = player => {
  document.getElementById('stats').textContent = player.getStats();
};

// Main function that runs the adventure game
const startAdventure = () => {
// Your logic to start the adventure.
let name = prompt("Hello player! What's your name?");
if (!name) {
  alert("Name is required to start your adventure!");
  return;
}
  console.log(`My name is ${name}`);

const species = prompt("Are you a dragon or a human?");
if (species !== "human" && species !== "dragon") {
  alert("Please enter 'dragon' or 'human' for your species.");
  return;
}
console.log(`I am a ${species}`);

const player = new Player(name, species);

// Start of game loop
let gameLoop = true;
while (gameLoop === true) {
  let random1 = randInt(0,4);
  let random2 = randInt(0,4);
  console.log(`${random1} and ${random2}`);

  playerInput = prompt(`Please choose a rune: ${runeChoices[random1].name}(1) or ${runeChoices[random2].name}(2)`);
  if (playerInput != 1 && playerInput != 2) {
    alert("Please pick 1 or 2");
  }
  console.log(`Player input: ${playerInput}`);
  
  computerInput = randInt(1,2);
  if (playerInput == computerInput) {
    if (computerInput === 1) {
      player.addRune(runeChoices[random1].name);
      player.gainXP();
      alert(`Congrats! You chose the right rune. Power unlocked: ${runeChoices[random1].power}. You earned 1 XP!`);
    } else {
      player.addRune(runeChoices[random2].name);
      player.gainXP();
      alert(`Congrats! You chose the right rune. Power unlocked: ${runeChoices[random2].power}. You earned 1 XP!`);
    }
  } else {
    alert("Oops! You chose the wrong rune. You lost 1 XP.");
    player.loseXP();
  }
    
  console.log(player.getStats());
  
  if (confirm("Do you want to continue your adventure?")) {
    gameLoop = true;
  } else {
    gameLoop = false;
  }
}
};

// Add event listener to the start button to begin the adventure when clicked
document.getElementById('startBtn').addEventListener('click', startAdventure);
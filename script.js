// Variables to keep track of pet's status
let petName = "Pou";
let hunger = 50;
let energy = 50;
let cleanliness = 50;

// Variables for game elements
const petContainer = document.getElementById("pet-container");
const pet = document.getElementById("pet");
const petNameSpan = document.getElementById("pet-name");
const hungerSpan = document.getElementById("hunger");
const energySpan = document.getElementById("energy");
const cleanlinessSpan = document.getElementById("cleanliness");
const feedButton = document.getElementById("feed-button");
const playButton = document.getElementById("play-button");
const bathButton = document.getElementById("bath-button");

// Function to update pet's status and display it on screen
function updatePetStatus() {
  petNameSpan.textContent = petName;
  hungerSpan.textContent = hunger;
  energySpan.textContent = energy;
  cleanlinessSpan.textContent = cleanliness;
}

// Function to feed the pet
function feedPet() {
  hunger += 10;
  energy -= 5;
  updatePetStatus();
}

// Function to play with the pet
function playWithPet() {
  energy += 10;
  cleanliness -= 5;
  updatePetStatus();
}

// Function to bath the pet
function bathPet() {
  cleanliness += 10;
  energy -= 5;
  updatePetStatus();
}

// Event listeners for game buttons
feedButton.addEventListener("click", feedPet);
playButton.addEventListener("click", playWithPet);
bathButton.addEventListener("click", bathPet);

// Initialize the pet status
updatePetStatus();
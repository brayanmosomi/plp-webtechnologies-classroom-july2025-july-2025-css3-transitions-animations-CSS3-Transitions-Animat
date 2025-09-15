// Get the car element
let car = document.getElementById("car");

// Function with parameter + return value
function applyTint(color) {
  car.style.background = `linear-gradient(to right, ${color}, black)`;
  return color; // returns applied tint
}

// Function to animate car
function animateCar(type) {
  let animationClass = "";

  if (type === "drive") {
    animationClass = "driving";
  } else if (type === "shine") {
    animationClass = "shining";
  }

  // Remove old animations first
  car.classList.remove("driving", "shining");

  // Trigger new one
  car.classList.add(animationClass);
}

// Reset car state
function resetCar() {
  car.classList.remove("driving", "shining");
  car.style.background = "linear-gradient(to right, #333, #555)";
  car.style.transform = "none";
}

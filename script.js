// Selecting HTML elements
const count = document.querySelector(".count");
const add = document.querySelector(".add");
const resetCount = document.querySelector(".reset");
const sub = document.querySelector(".subtract");

// Adding event listeners to buttons
add.addEventListener("click", () => {
  count.innerHTML++;
  setColor(); // Call the setColor function after modifying the count
});

sub.addEventListener("click", () => {
  count.innerHTML--;
  setColor(); // Call the setColor function after modifying the count
});

resetCount.addEventListener("click", () => {
  count.innerHTML = 0;
  setColor(); // Call the setColor function after resetting the count
});

// Function to set the color of the count based on its value
function setColor() {
  if (count.innerHTML > 0) {
    count.style.color = 'Green';
  } else if (count.innerHTML < 0) {
    count.style.color = 'Orangered';
  } else {
    count.style.color = 'White';
  }
}

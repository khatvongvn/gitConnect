// Generate random number
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Get references to HTML elements
const guessField = document.getElementById('guessField');
const message = document.getElementById('message');

// Function to check the guess
function checkGuess() {
  const userGuess = parseInt(guessField.value);
  
  if (userGuess === randomNumber) {
    message.textContent = 'Chúc mừng! Bạn đã đoán đúng!';
    message.style.color = 'green';
    guessField.disabled = true;
  } else if (userGuess < randomNumber) {
    message.textContent = 'Số bạn đoán nhỏ hơn số được chọn';
    message.style.color = 'red';
  } else if (userGuess > randomNumber) {
    message.textContent = 'Số bạn đoán lớn hơn số được chọn';
    message.style.color = 'red';
  }
}

// Function to change the color of the card on click
function changeColor() {
    const card = document.querySelector('.card');
    const colors = ['#f6d365', '#fda085', '#84fab0', '#8fd3f4', '#ffecd2', '#fc466b'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    card.style.backgroundColor = randomColor;
  }
  
  // Function to show a hidden message
  function showMessage() {
    const message = document.getElementById('message');
    message.classList.add('show-message');
  }
  
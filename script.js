// Get the button and navigation bar elements
const toggleButton = document.getElementById('toggleButton');
const navbar = document.getElementById('navbar');

// Add a click event listener to toggle the navigation bar visibility
toggleButton.addEventListener('click', function() {
  // Toggle the class to show/hide the navigation bar
  navbar.classList.toggle('show');
});

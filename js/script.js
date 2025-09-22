//  For toggling the navigation menu
var navLinks = document.getElementById('navLinks');

function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}


//  For form validation
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(e) {
    let valid = true;
    let name = form.name.value.trim();
    let email = form.email.value.trim();
    let subject = form.subject.value.trim();
    let message = form.message.value.trim();

    // Simple validation
    if (name === '') {
      alert('Please enter your name.');
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Please enter a valid email address.');
      valid = false;  // Basic email format check
    } else if (subject === '') {
      alert('Please enter a subject.');
      valid = false;  // Subject should not be empty
    } else if (message === '') {
      alert('Please enter your message.');
      valid = false; 
    }

    if (!valid) {
      e.preventDefault(); // Prevent form submission if not valid
    }
    // If valid, form submits to PHP which sends the email
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const errorMessages = document.getElementById('errorMessages');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
      
      errorMessages.innerHTML = '';
      
      const username = document.getElementById('username').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      
      if (username === '') {
        showError('Username cannot be empty.');
      }
      
      if (!isValidEmail(email)) {
        showError('Invalid email format.');
      }
      
      if (!isValidPassword(password)) {
        showError('Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character.');
      }
      
      if (errorMessages.innerHTML === '') {
        form.reset(); 
      }
    });
    
    function showError(message) {
      const errorElement = document.createElement('div');
      errorElement.textContent = message;
      errorMessages.appendChild(errorElement);
    }
    
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
    
    function isValidPassword(password) {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return passwordRegex.test(password);
    }
  });
  
  
// Temporary storage for user credentials
let userCredentials = {};

// Show the Sign-Up form
function showSignupForm() {
  document.getElementById('page-title').textContent = 'Sign Up';
  document.getElementById('main-content').innerHTML = `
    <form id="signup-form">
      <input type="text" id="signup-name" placeholder="Full Name" required>
      <input type="email" id="signup-email" placeholder="Email Address" required>
      <input type="password" id="signup-password" placeholder="Password" required>
      <button type="submit">Sign Up</button>
      <p>Already have an account? <a href="#" id="go-to-login">Login here</a>.</p>
    </form>
  `;

  document.getElementById('signup-form').addEventListener('submit', handleSignup);
  document.getElementById('go-to-login').addEventListener('click', (e) => {
    e.preventDefault();
    showLoginForm();
  });
}

// Show the Login form
function showLoginForm() {
  document.getElementById('page-title').textContent = 'Login';
  document.getElementById('main-content').innerHTML = `
    <form id="login-form">
      <input type="email" id="login-email" placeholder="Email Address" required>
      <input type="password" id="login-password" placeholder="Password" required>
      <button type="submit">Login</button>
      <p>Don't have an account? <a href="#" id="go-to-signup">Sign up here</a>.</p>
    </form>
  `;

  document.getElementById('login-form').addEventListener('submit', handleLogin);
  document.getElementById('go-to-signup').addEventListener('click', (e) => {
    e.preventDefault();
    showSignupForm();
  });
}

// Handle Sign-Up Form Submission
function handleSignup(e) {
  e.preventDefault();
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  // Store credentials
  userCredentials[email] = password;

  alert('Sign-Up Successful! You can now log in.');
  showLoginForm();
}

// Handle Login Form Submission
function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  // Check credentials
  if (userCredentials[email] && userCredentials[email] === password) {
    alert('Login Successful! Redirecting to the home page...');
    loadHomePage();
  } else {
    alert('Invalid email or password. Please try again.');
  }
}

// Load Home Page
function loadHomePage() {
  document.getElementById('page-title').textContent = 'Home';
  document.getElementById('main-content').innerHTML = `
    <h2>Welcome to the Home Page!</h2>
    <p>Thank you for logging in. Explore our features.</p>
  `;
}

// Navbar event listeners
document.getElementById('navbar-signup').addEventListener('click', (e) => {
  e.preventDefault();
  showSignupForm();
});

document.getElementById('navbar-login').addEventListener('click', (e) => {
  e.preventDefault();
  showLoginForm();
});

// Handle Footer Form Submission
document.getElementById('footer-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('footer-name').value;
  const email = document.getElementById('footer-email').value;
  const phone = document.getElementById('footer-phone').value;
  const address = document.getElementById('footer-address').value;

  console.log('Personal Details:', { name, email, phone, address });
  alert('Thank you for submitting your details!');
  e.target.reset();
});

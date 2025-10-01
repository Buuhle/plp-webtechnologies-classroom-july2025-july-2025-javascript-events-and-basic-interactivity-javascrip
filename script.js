const clickBtn = document.getElementById('clickBtn');
const clickMsg = document.getElementById('clickMsg');
clickBtn.addEventListener('click', function() {
  clickMsg.textContent = "Button clicked!";
});

const hoverText = document.getElementById('hoverText');
const hoverMsg = document.getElementById('hoverMsg');
hoverText.addEventListener('mouseover', function() {
  hoverMsg.textContent = "You hovered over the text!";
});
hoverText.addEventListener('mouseout', function() {
  hoverMsg.textContent = "";
});

const modeToggle = document.getElementById('modeToggle');
modeToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

let count = 0;
const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');
incrementBtn.addEventListener('click', function() {
  count++;
  counterDisplay.textContent = count;
});

const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(q => {
  q.addEventListener('click', function() {
    const answer = q.nextElementSibling;
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
  });
});

const signupForm = document.getElementById('signupForm');
const formMsg = document.getElementById('formMsg');
signupForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  let messages = [];
  if (name === "") messages.push("Name cannot be empty.");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) messages.push("Please enter a valid email.");
  if (password.length < 6) messages.push("Password must be at least 6 characters long.");
  if (messages.length > 0) {
    formMsg.style.color = "red";
    formMsg.innerHTML = messages.join("<br>");
  } else {
    formMsg.style.color = "green";
    formMsg.textContent = "Form submitted successfully!";
    signupForm.reset();
  }
});

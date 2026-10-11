// Mobile menu
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// Conversation starters — add your own from the index cards!
const starters = [
  "What's the best thing you've eaten this week?",
  "Is that a good book? I've been looking for a new one.",
  "Where'd you get that bag? I love it.",
  "What's your go-to coffee order?",
  "Any hidden gems in this neighborhood I should know about?",
  "What's something you're looking forward to this month?",
  "If you could only listen to one album forever, what would it be?",
  "What's keeping you busy these days?",
  "What's the best concert you've ever been to?",
  "How long have you lived in DC?",
  "What's a small thing that made your day better recently?",
];
let i = 0;
const starterEl = document.getElementById('starter');
document.getElementById('starter-btn').addEventListener('click', () => {
  starterEl.style.opacity = 0;
  setTimeout(() => {
    i = (i + 1 + Math.floor(Math.random() * (starters.length - 1))) % starters.length;
    starterEl.textContent = `“${starters[i]}”`;
    starterEl.style.opacity = 1;
  }, 250);
});

// Back-to-top button
const backTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => backTop.classList.toggle('show', window.scrollY > 600), { passive: true });

document.getElementById('year').textContent = new Date().getFullYear();

'use strict';

const body = document.body;
const btn = document.getElementById('toggle-theme');

btn.addEventListener('click', (event) => {
  const enabled = body.classList.toggle("dark-theme");
  event.currentTarget.textContent = enabled ? 'Set light theme' : 'Set dark theme';
});

// Interactive card alert
function showAlert(message) {
  // Create toast notification
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerText = message;
  document.body.appendChild(toast);

  // Animate and remove
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => document.body.removeChild(toast), 500);
  }, 3000);
}

// Optional: add keyboard shortcut
document.addEventListener('keydown', (e) => {
  if (e.key === 'h') showAlert('Press H: Help is on the way!');
});

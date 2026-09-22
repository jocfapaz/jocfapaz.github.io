// Esperar a que el HTML cargue por completo
document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeToggleIcon = document.getElementById('theme-toggle-icon');
  const htmlElement = document.documentElement;

  // 1. Revisar si la persona ya tenía el modo oscuro activo previamente
  if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
    if (themeToggleIcon) themeToggleIcon.textContent = '☀️';
  } else {
    htmlElement.classList.remove('dark');
    if (themeToggleIcon) themeToggleIcon.textContent = '🌙';
  }

  // 2. Al hacer clic en el botón, alternar entre modo claro y oscuro
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        if (themeToggleIcon) themeToggleIcon.textContent = '🌙';
      } else {
        htmlElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        if (themeToggleIcon) themeToggleIcon.textContent = '☀️';
      }
    });
  }
});
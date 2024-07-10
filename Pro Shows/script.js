document.addEventListener('DOMContentLoaded', () => {
    const curtains = document.querySelectorAll('.curtain');
    
    curtains.forEach((curtain, index) => {
      curtain.style.animationDelay = `${index * 0.5}s`;
    });
  });
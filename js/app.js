const clickableElements = document.querySelectorAll('.large-container, .glass-button');

clickableElements.forEach(element => {
  element.addEventListener('click', function(e) {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Créer des gouttes liquides
    for (let i = 0; i < 10; i++) {
      const drop = document.createElement('div');
      drop.className = 'liquid-drop';

      const size = Math.random() * 25 + 15;
      drop.style.width = size + 'px';
      drop.style.height = size + 'px';
      drop.style.left = x + 'px';
      drop.style.top = y + 'px';
      drop.style.background = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3})`;
      drop.style.animationDelay = Math.random() * 0.2 + 's';
      drop.style.transform = `translate(${Math.random() * 80 - 40}px, 0)`;

      element.appendChild(drop);

      setTimeout(() => {
        drop.remove();
      }, 3000);
    }
  });

  // Effet de particules au survol
  element.addEventListener('mouseenter', function() {
    const interval = setInterval(() => {
      if (!element.matches(':hover')) {
        clearInterval(interval);
        return;
      }

      const particle = document.createElement('div');
      particle.className = 'particle';

      const rect = element.getBoundingClientRect();
      particle.style.left = (rect.left + Math.random() * rect.width) + 'px';
      particle.style.top = (rect.top + Math.random() * rect.height) + 'px';

      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 4000);
    }, 100);
  });
});

// Animation de particules ambiantes
setInterval(() => {
  const particle = document.createElement('div');
  particle.className = 'particle';
  particle.style.left = Math.random() * window.innerWidth + 'px';
  particle.style.top = Math.random() * window.innerHeight + 'px';
  particle.style.animationDuration = (Math.random() * 3 + 2) + 's';

  document.body.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 5000);
}, 500);

const cvUrl = "DOCS/CV.pdf";

document.getElementById("openCvBtn").addEventListener("click", () => {
  window.open(cvUrl, "_blank", "noopener,noreferrer");
});

function openSkill() {
  window.location("Pages/skill.html");
}

function openMe() {
  window.location("Pages/me.html");
}

function openProject() {
  window.open("Pages/projet.html");
}

function openHome() {
  window.location("index.html");
}

function openPlan() {
  window.location("Pages/plan.html");
}

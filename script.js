// Cursor glow
const glow = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

// Scroll reveal
document.querySelectorAll('.reveal').forEach(el => {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
        el.style.transition = 'all 0.8s ease';
      }
    });
  });
  obs.observe(el);
});

// Card tilt
document.querySelectorAll('.tilt').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    card.style.transform =
      `rotateX(${-(y - r.height/2)/20}deg) rotateY(${(x - r.width/2)/20}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0)';
  });
});

// Modal
const modal = document.getElementById('modal');
document.querySelectorAll('.card button').forEach(btn => {
  btn.onclick = () => {
    const card = btn.parentElement;
    document.getElementById('modal-title').innerText = card.dataset.name;
    document.getElementById('modal-price').innerText = card.dataset.price;
    modal.style.display = 'flex';
  };
});

document.querySelector('.close').onclick = () => {
  modal.style.display = 'none';
};

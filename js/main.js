// ─── July 04 Restaurant & Bar — Main Script ───

// Image paths (relative to index.html)
const IMAGES = {
  venue: 'images/venue-hero.jpg',
  food: 'images/food.jpg',
  night: 'images/night-exterior.jpg',
  exterior: 'images/day-exterior.jpg',
  bar: 'images/bar-interior.jpg'
};

// Apply venue hero image to all general venue slots
['heroBg', 'aboutImg', 'pb1', 'pb2', 'pb3', 'quoteBg', 'gs1', 'gs2', 'gs3', 'gs4'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.style.backgroundImage = `url('${IMAGES.venue}')`;
});

// Hero parallax zoom-in on load
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const bg = document.getElementById('heroBg');
    if (bg) bg.classList.add('loaded');
  }, 120);
});

// Scrolled nav state
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 80);
}, { passive: true });

// ─── Reservation Modal ───
function openModal(e) {
  if (e) e.preventDefault();
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('modal')) closeModal();
}

function submitReservation() {
  alert('Thank you! We have received your request and will be in touch shortly. 🙏');
  closeModal();
}

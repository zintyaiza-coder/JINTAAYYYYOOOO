// 1. Membuat animasi partikel hati melayang di latar belakang
const heartsContainer = document.getElementById('hearts-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart-particle');
  heart.innerHTML = '❤';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (Math.random() * 16 + 12) + 'px';
  heart.style.animationDuration = (Math.random() * 4 + 4) + 's';
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}
setInterval(createHeart, 500);

// 2. Interaksi membuka amplop saat segel diklik
const envelope = document.getElementById('envelope');
const openBtn = document.getElementById('open-envelope-btn');

openBtn.addEventListener('click', () => {
  envelope.classList.add('open');
});

// 3. Pindah ke bagian Buku Harian saat tombol "Mulai Kejutan" diklik
const startBtn = document.getElementById('start-btn');
const sectionEnvelope = document.getElementById('section-envelope');
const sectionDiary = document.getElementById('section-diary');

startBtn.addEventListener('click', () => {
  sectionEnvelope.classList.add('hidden');
  sectionDiary.classList.remove('hidden');
});
// Interaksi Membuka Buku Harian
const unlockBtn = document.getElementById('unlock-btn');
const book = document.getElementById('book');

unlockBtn.addEventListener('click', () => {
  book.classList.add('open');
});

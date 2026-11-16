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

// 3. Pindah ke bagian Buku Harian saat tombol "Mulai Kejutan" diklik + Memutar Musik
const startBtn = document.getElementById('start-btn');
const sectionEnvelope = document.getElementById('section-envelope');
const sectionDiary = document.getElementById('section-diary');
const bgMusic = document.getElementById('bg-music'); // Elemen audio lagu

startBtn.addEventListener('click', () => {
  // 1. Jalankan perintah play audio secara eksplisit saat tombol diklik
  bgMusic.play().then(() => {
    console.log("Musik berhasil diputar!");
  }).catch(error => {
    console.log("Autoplay dicegah oleh browser:", error);
  });

  // 2. Transisi halaman
  sectionEnvelope.classList.add('hidden');
  sectionDiary.classList.remove('hidden');
});

// 4. Interaksi Membuka Buku Harian saat Gembok/Sampul diklik
const bookCover = document.getElementById('book-cover');
const book = document.getElementById('book');

bookCover.addEventListener('click', () => {
  book.classList.add('open');
});

// 5. Pindah dari Buku Harian ke Bagian Polaroid (4 Foto)
const nextToMemoriesBtn = document.getElementById('next-to-memories-btn');
const sectionMemories = document.getElementById('section-memories');

nextToMemoriesBtn.addEventListener('click', () => {
  sectionDiary.classList.add('hidden');
  sectionMemories.classList.remove('hidden');
});

// Efek klik kartu polaroid bergeser satu per satu
const polaroidCards = document.querySelectorAll('.polaroid-card');
polaroidCards.forEach((card, index) => {
  card.addEventListener('click', () => {
    card.style.transform = `translateY(-180px) rotate(${index * 15 + 25}deg)`;
    card.style.opacity = '0';
    card.style.pointerEvents = 'none';
  });
});

// 6. Pindah dari Halaman Polaroid ke Halaman Penutup
const nextToFinalBtn = document.getElementById('next-to-final-btn');
const sectionFinal = document.getElementById('section-final');

nextToFinalBtn.addEventListener('click', () => {
  sectionMemories.classList.add('hidden');
  sectionFinal.classList.remove('hidden');
});

// 7. Interaksi Klik Kotak Kado (Kejutan Akhir + Hujan Hati)
const hugBtn = document.getElementById('hug-btn');
const secretHugMsg = document.getElementById('secret-hug-msg');

hugBtn.addEventListener('click', () => {
  hugBtn.innerHTML = '🤗';
  hugBtn.style.animation = 'none';
  secretHugMsg.classList.remove('hidden');
  
  for (let i = 0; i < 25; i++) {
    setTimeout(createHeart, i * 80);
  }
});

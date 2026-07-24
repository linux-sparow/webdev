// 1. Ambil elemen tombol berdasarkan ID
const btnSparow = document.getElementById('btn-sparow');
const btnWiki = document.getElementById('btn-wiki');
const btnDocsUser = document.getElementById('btn-docs-user');
const btnDocsDev = document.getElementById('btn-docs-dev');

// 2. Ambil elemen wadah konten berdasarkan ID
const contentSparow = document.getElementById('content-sparow');
const contentWiki = document.getElementById('content-wiki');
const contentDocsUser = document.getElementById('content-docs-user');
const contentDocsDev = document.getElementById('content-docs-dev');

// 3. Fungsi untuk mengatur perpindahan tab secara otomatis
function setActiveTab(activeBtn, activeContent) {
    // Matikan warna active dari semua tombol
    btnSparow.classList.remove('active');
    btnWiki.classList.remove('active');
    btnDocsUser.classList.remove('active');
    btnDocsDev.classList.remove('active');
    
    // Sembunyikan semua konten
    contentSparow.style.display = 'none';
    contentWiki.style.display = 'none';
    contentDocsUser.style.display = 'none';
    contentDocsDev.style.display = 'none';
    
    // Nyalakan tombol dan tampilkan konten yang baru saja diklik
    activeBtn.classList.add('active');
    activeContent.style.display = 'block';
}

// 4. Pasang aksi (Event Listener) ke masing-masing tombol
btnSparow.addEventListener('click', () => setActiveTab(btnSparow, contentSparow));
btnWiki.addEventListener('click', () => setActiveTab(btnWiki, contentWiki));
btnDocsUser.addEventListener('click', () => setActiveTab(btnDocsUser, contentDocsUser));
btnDocsDev.addEventListener('click', () => setActiveTab(btnDocsDev, contentDocsDev));

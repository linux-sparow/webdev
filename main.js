// Ambil elemen tombol berdasarkan ID
const btnSparow = document.getElementById('btn-sparow');
const btnWiki = document.getElementById('btn-wiki');
const btnDocsUser = document.getElementById('btn-docs-user');
const btnDocsDev = document.getElementById('btn-docs-dev');

// Ambil elemen wadah konten berdasarkan ID
const contentSparow = document.getElementById('content-sparow');
const contentWiki = document.getElementById('content-wiki');
const contentDocsUser = document.getElementById('content-docs-user');
const contentDocsDev = document.getElementById('content-docs-dev');

// Fungsi untuk mengatur perpindahan tab secara otomatis
function setActiveTab(activeBtn, activeContent) {
    btnSparow.classList.remove('active');
    btnWiki.classList.remove('active');
    btnDocsUser.classList.remove('active');
    btnDocsDev.classList.remove('active');
    
    contentSparow.style.display = 'none';
    contentWiki.style.display = 'none';
    contentDocsUser.style.display = 'none';
    contentDocsDev.style.display = 'none';
    
    activeBtn.classList.add('active');
    activeContent.style.display = 'block';
}

// Pasang aksi (Event Listener) ke masing-masing tombol
btnSparow.addEventListener('click', () => setActiveTab(btnSparow, contentSparow));
btnWiki.addEventListener('click', () => setActiveTab(btnWiki, contentWiki));
btnDocsUser.addEventListener('click', () => setActiveTab(btnDocsUser, contentDocsUser));
btnDocsDev.addEventListener('click', () => setActiveTab(btnDocsDev, contentDocsDev));

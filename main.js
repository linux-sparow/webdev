// Mengambil elemen tombol dan konten berdasarkan ID masing-masing
const btnSparow = document.getElementById('btn-sparow');
const btnWiki = document.getElementById('btn-wiki');
const btnDocsUser = document.getElementById('btn-docs-user');
const btnDocsDev = document.getElementById('btn-docs-dev');

const contentSparow = document.getElementById('content-sparow');
const contentWiki = document.getElementById('content-wiki');
const contentDocsUser = document.getElementById('content-docs-user');
const contentDocsDev = document.getElementById('content-docs-dev');

// Event Listener Tab 1: Sparow
btnSparow.addEventListener('click', () => {
    btnSparow.classList.add('active');
    btnWiki.classList.remove('active');
    btnDocsUser.classList.remove('active');
    btnDocsDev.classList.remove('active');

    contentSparow.style.display = 'block';
    contentWiki.style.display = 'none';
    contentDocsUser.style.display = 'none';
    contentDocsDev.style.display = 'none';
});

// Event Listener Tab 2: Wiki
btnWiki.addEventListener('click', () => {
    btnWiki.classList.add('active');
    btnSparow.classList.remove('active');
    btnDocsUser.classList.remove('active');
    btnDocsDev.classList.remove('active');

    contentWiki.style.display = 'block';
    contentSparow.style.display = 'none';
    contentDocsUser.style.display = 'none';
    contentDocsDev.style.display = 'none';
});

// Event Listener Tab 3: Dokumentasi User
btnDocsUser.addEventListener('click', () => {
    btnDocsUser.classList.add('active');
    btnSparow.classList.remove('active');
    btnWiki.classList.remove('active');
    btnDocsDev.classList.remove('active');

    contentDocsUser.style.display = 'block';
    contentSparow.style.display = 'none';
    contentWiki.style.display = 'none';
    contentDocsDev.style.display = 'none';
});

// Event Listener Tab 4: Dokumentasi Developer
btnDocsDev.addEventListener('click', () => {
    btnDocsDev.classList.add('active');
    btnSparow.classList.remove('active');
    btnWiki.classList.remove('active');
    btnDocsUser.classList.remove('active');

    contentDocsDev.style.display = 'block';
    contentSparow.style.display = 'none';
    contentWiki.style.display = 'none';
    contentDocsUser.style.display = 'none';
});

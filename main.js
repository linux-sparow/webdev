// Ambil semua tombol tab dan semua konten tab sekaligus
const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.file-browser > div');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        // 1. Hapus kelas 'active' dari semua tombol
        tabs.forEach(t => t.classList.remove('active'));
        // Tambahkan kelas 'active' ke tombol yang sedang diklik
        tab.classList.add('active');

        // 2. Sembunyikan semua konten
        contents.forEach(c => c.style.display = 'none');
        // Tampilkan konten yang posisinya cocok dengan tombol yang diklik
        if (contents[index]) {
            contents[index].style.display = 'block';
        }
    });
});

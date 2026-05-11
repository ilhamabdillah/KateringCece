document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Ambil data form
            const nama = document.getElementById('nama').value;
            const telepon = document.getElementById('telepon').value;
            const tanggal = document.getElementById('tanggal').value;
            const pesan = document.getElementById('pesan').value;

            // Nomor tujuan WhatsApp
            const nomorWA = '6283898141700';

            // Format pesan
            const text = `Halo, saya ${nama}%0A%0ANomor: ${telepon}%0ATanggal Acara: ${tanggal}%0A%0APesan:%0A${pesan}`;

            // Buka WhatsApp
            window.open(`https://wa.me/${nomorWA}?text=${text}`, '_blank');

            // Reset form
            contactForm.reset();
        });
    }
});
// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const nama = document.getElementById('nama').value;
            const telepon = document.getElementById('telepon').value;
            const tanggal = document.getElementById('tanggal').value;
            const pesan = document.getElementById('pesan').value;

            // Display alert (in real application, you would send this to a server)
            alert(`Terima kasih, ${nama}!\n\nPesan Anda telah diterima. Kami akan menghubungi Anda segera di nomor ${telepon}.\n\nDetail:\nTanggal Acara: ${tanggal}\nPesan: ${pesan}`);

            // Reset form
            contactForm.reset();
        });
    }
});

// Smooth scroll for navigation (optional enhancement)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
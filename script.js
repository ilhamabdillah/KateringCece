// Form submission handler
document.addEventListener('DOMContentLoaded', function () {

    const contactForm = document.getElementById('contactForm');

    if (contactForm) {

        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Ambil data form
            const nama = document.getElementById('nama').value;
            const telepon = document.getElementById('telepon').value;
            const tanggal = document.getElementById('tanggal').value;
            const pesan = document.getElementById('pesan').value;

            // Nomor WhatsApp tujuan
            const nomorWA = '6283898141700';

            // Format pesan WhatsApp
            const text = 
`Halo, saya ${nama}

Nomor Telepon: ${telepon}
Tanggal Acara: ${tanggal}

Pesan:
${pesan}`;

            // Encode biar aman dikirim ke URL
            const encodedText = encodeURIComponent(text);

            // Link WhatsApp
            const whatsappURL = `https://api.whatsapp.com/send?phone=${nomorWA}&text=${encodedText}`;

            // Buka WhatsApp
            window.open(whatsappURL, '_blank');

            // Reset form
            contactForm.reset();
        });

    }

});

// Smooth scroll untuk anchor link
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
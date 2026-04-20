// Hiệu ứng thay đổi màu nền thanh Nav khi cuộn
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = '#1a252f';
        nav.style.padding = '0.5rem 10%';
    } else {
        nav.style.background = '#2c3e50';
        nav.style.padding = '1rem 10%';
    }
});
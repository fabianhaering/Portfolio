/* =========================
   NAV: scroll shadow + active
========================= */
const topnav = document.getElementById('topnav');

window.addEventListener('scroll', () => {
    topnav.classList.toggle('scrolled', window.scrollY > 20);
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id], header[id], footer[id]');
const navLinks = document.querySelectorAll('.topnav ul a');

const observerNav = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
            });
        }
    });
}, { threshold: 0.4 });

sections.forEach(s => observerNav.observe(s));

/* =========================
   BURGER MENU
========================= */
const burger = document.getElementById('burger');
const navUl = document.querySelector('.topnav ul');

burger.addEventListener('click', () => {
    navUl.classList.toggle('open');
});

navUl.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navUl.classList.remove('open'));
});

/* =========================
   REVEAL ON SCROLL
========================= */
const reveals = document.querySelectorAll('.reveal');

const observerReveal = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observerReveal.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

reveals.forEach(el => observerReveal.observe(el));

/* =========================
   DARK MODE TOGGLE
========================= */
const darkToggle = document.getElementById('darkToggle');

// Gespeicherte Präferenz laden
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark');
    darkToggle.textContent = '☀️';
}

darkToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    darkToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('darkMode', isDark);
});

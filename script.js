// Function to get a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Adding event listeners for changing background colors on hover
document.querySelectorAll('.vertical-menu a').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = getRandomColor();
    });

    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = '';
    });
});

// Toggle the vertical menu
const menuIcon = document.getElementById('menu-icon');
const verticalMenu = document.querySelector('.vertical-menu');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    verticalMenu.classList.toggle('active');
});

// JavaScript for Dark/Light Mode Toggle
const toggleSwitch = document.querySelector("#dark-mode-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
    document.body.classList.add("dark");
    toggleSwitch.checked = true;
}

toggleSwitch.addEventListener("change", () => {
    if (toggleSwitch.checked) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
});

// Scroll Reveal Animation
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('.home-text', { delay: 200, origin: 'left' });
ScrollReveal().reveal('.home-img', { delay: 200, origin: 'right' });
ScrollReveal().reveal('.about-text', { delay: 200, origin: 'right' });
ScrollReveal().reveal('.about-img', { delay: 200, origin: 'left' });
ScrollReveal().reveal('.heading', { delay: 200, origin: 'top' });
ScrollReveal().reveal('.menu-container .box', { delay: 200, origin: 'top' });
ScrollReveal().reveal('.services-container .s-box', { delay: 200, origin: 'top' });
ScrollReveal().reveal('.connect-text', { delay: 200, origin: 'top' });
ScrollReveal().reveal('.contact', { delay: 200, origin: 'top' });

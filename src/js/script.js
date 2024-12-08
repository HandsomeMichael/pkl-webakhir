


const navbarScrollY = 60;
const navbar = document.querySelector(".kucit-navbar");
const frontimages = document.querySelectorAll('.front-img');
const cursor = document.querySelector('.cursor');

window.addEventListener("scroll", function() 
{
    // navbar modules
    if (navbar !== null)
    {
        navbar.classList.toggle("toggled", window.scrollY > navbarScrollY);
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        entry.target.classList.add("appear");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll("[data-animation]");
    elements.forEach(element => {
        const delay = element.getAttribute("data-animation-delay") || "0s";
        element.style.transitionDelay = delay;
    });
});

// Observe all elements with the 'fade-in' class
document.querySelectorAll("[data-animation]").forEach((el) => observer.observe(el));
document.querySelectorAll("out-of-focus").forEach((el) => observer.observe(el));


document.addEventListener('click', () => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

// Mouse listener 
document.addEventListener('mousemove', (e) => 
{
    // Custom cursor
    cursor.setAttribute("style", "top: "+(e.clientY - 10)+"px; left: "+(e.clientX - 10)+"px;")

    // Parallax
    if (window.scrollY > 300) return;

    frontimages.forEach((pagefront) => {
        // Get the bounding rectangle of target
        const rect = pagefront.getBoundingClientRect();
        // Mouse position
        const offsetPixelX = 5;
        const offsetPixelY = 3;
        const offsetRatioX = 1 - (e.clientX - rect.left) / rect.width;
        const offsetRatioY = 1 - (e.clientY - rect.top) / rect.height;

        pagefront.style.setProperty('--offset-posX',`${offsetRatioX * offsetPixelX}px`);
        pagefront.style.setProperty('--offset-posY',`${offsetRatioY * offsetPixelY}px`);
    });
});

// Function to initialize blue balls with modular attributes
document.querySelectorAll(".blueball").forEach((ball) => {
    const size = ball.getAttribute("balls-size") || 1000; // Default size
    const color = ball.getAttribute("balls-color") || "rgba(0, 123, 255, 0.8)"; // Default color
    const opacity = ball.getAttribute("balls-opacity") || 0.3; // Default opacity

    // Apply the styles dynamically
    ball.style.width = `${size}px`;
    ball.style.height = `${size}px`;
    ball.style.background = `radial-gradient(circle, ${color} 0%, rgba(0, 123, 255, 0) 70%)`;
    ball.style.opacity = opacity;
});
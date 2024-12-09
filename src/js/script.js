


const navbarScrollY = 60;
const navbar = document.querySelector(".kucit-navbar");
const frontimages = document.querySelectorAll('.front-img');

window.addEventListener("scroll", function() 
{
    // navbar modules
    if (navbar !== null)
    {
        navbar.classList.toggle("toggled", window.scrollY > navbarScrollY);
    }

    frontimages.forEach((pagefront) => {
        // Get the bounding rectangle of target
        const rect = pagefront.getBoundingClientRect();
        const math = this.window.scrollY * 0.2 

        pagefront.style.setProperty('--offset-posX',`-${math}px`);
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        entry.target.classList.add("appear");
        }
    });
});
  

document.addEventListener("DOMContentLoaded", () => {

    // Gugugaga
    const elements = document.querySelectorAll("[data-animation]");
    elements.forEach(element => {
        const delay = element.getAttribute("data-animation-delay") || "0s";
        element.style.transitionDelay = delay;
    });

    // Pekerjaan
    const picker = document.querySelector("nav.picker");
    const buttons = picker.children; // Get button list
    const articles = document.querySelector(".content").children; // Get content list
  
    Array.from(buttons).forEach((button, index) => {
      button.addEventListener("click", () => {
        // Remove 'active' class from all buttons and articles
        Array.from(buttons).forEach(btn => btn.classList.remove("active"));
        Array.from(articles).forEach(article => article.classList.remove("active"));
  
        // Add 'active' class to the clicked button and corresponding article
        button.classList.add("active");
        articles[index].classList.add("active");
      });
    });
  
    // Initialize: activate the first button and article
    buttons[0].classList.add("active");
    articles[0].classList.add("active");
});

// Observe all elements with the 'fade-in' class
document.querySelectorAll("[data-animation]").forEach((el) => observer.observe(el));
document.querySelectorAll("out-of-focus").forEach((el) => observer.observe(el));

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
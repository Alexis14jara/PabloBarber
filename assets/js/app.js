// --- 1. Mobile Menu Toggle ---
const mobileBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");

mobileBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // Toggle icon
  const icon = mobileBtn.querySelector("i");
  if (navLinks.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});

// Close menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    mobileBtn.querySelector("i").classList.remove("fa-times");
    mobileBtn.querySelector("i").classList.add("fa-bars");
  });
});

// --- 2. Scroll Reveal Animation ---
const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  const elementVisible = 120; // Slightly lower threshold for mobile

  revealElements.forEach((reveal) => {
    const elementTop = reveal.getBoundingClientRect().top;
    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
// Trigger once on load
revealOnScroll();

// --- 3. Gallery Filtering ---
const filterBtns = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterBtns.forEach((b) => b.classList.remove("active"));
    // Add active class to clicked button
    btn.classList.add("active");

    const filterValue = btn.getAttribute("data-filter");

    galleryItems.forEach((item) => {
      if (
        filterValue === "all" ||
        item.getAttribute("data-category") === filterValue
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// --- 4. Contact Form Handling ---
const form = document.getElementById("contactForm");
const toast = document.getElementById("toast");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Show Toast
  toast.className = "toast show";

  // Reset form
  form.reset();

  // Hide toast after 3 seconds
  setTimeout(function () {
    toast.className = toast.className.replace("show", "");
  }, 3000);
});

// --- 5. Header Background on Scroll ---
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.padding = "5px 0";
    header.style.background = "rgba(0,0,0,0.98)";
    header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
  } else {
    header.style.padding = "10px 0";
    header.style.background = "rgba(10,10,10,0.95)";
    header.style.boxShadow = "none";
  }
});

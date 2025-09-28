// Mobile menu toggle
 const menuToggle = document.getElementById('menu-toggle'); const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => { navbar.classList.toggle('active'); });

// Scroll animation observer
 const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("visible"); } }); }, { threshold: 0.1 });

// Animate fade-in sections
 const fadeEls = document.querySelectorAll(".fade-in, .project-card"); fadeEls.forEach(el => observer.observe(el));

// Animate services list//
 const servicesSection =for document.getElementById("services"); observer.observe(servicesSection);


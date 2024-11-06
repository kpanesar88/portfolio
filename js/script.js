const themeToggleButton = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const body = document.body;
const navbar = document.getElementById('navbar');
const navbarLinks = document.querySelectorAll('ul li a');
const logo = document.getElementById('logo');

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('bg-black');
    body.classList.toggle('text-white');
    navbar.classList.toggle('bg-black');
    navbar.classList.toggle('border-white');  // Toggle the border color to white on dark mode
    navbar.classList.toggle('border-black');  // Toggle the border color to black on light mode
    navbarLinks.forEach(link => link.classList.toggle('text-white'));
    logo.classList.toggle('text-white');
    sunIcon.classList.toggle('hidden');
    moonIcon.classList.toggle('hidden');
});

// Initialize with correct icon visibility and navbar border color on page load
if (body.classList.contains('bg-black')) {
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
    logo.classList.add('text-white');
    navbar.classList.add('border-white'); // Ensure the border is white on dark mode
} else {
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
    logo.classList.remove('text-white');
    navbar.classList.remove('border-white'); // Remove the white border on light mode
    navbar.classList.add('border-black'); // Ensure the border is black on light mode
}
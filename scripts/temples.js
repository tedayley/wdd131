// 1. Footer: Update the copyright year and last modified date dynamically

window.addEventListener('DOMContentLoaded', () => {
    // Get the current year
    const currentYear = new Date().getFullYear();
    
    // Get the last modified date
    const lastModified = document.lastModified;

    // Reference the footer and update the content
    const footer = document.querySelector('footer');
    footer.innerHTML = `
        <p>&copy; ${currentYear} Temple Album | Last Modified: ${lastModified}</p>
    `;
});

// 2. Hamburger Menu for Mobile View

// Reference the hamburger button and menu
const hamburgerButton = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

// Event listener for toggling the menu
hamburgerButton.addEventListener('click', () => {
    // Toggle the "active" class to show/hide the menu
    navMenu.classList.toggle('active');
    hamburgerButton.classList.toggle('active');
});

// Ensure the hamburger button is only visible in mobile view
const mediaQuery = window.matchMedia('(max-width: 768px)');

mediaQuery.addListener((e) => {
    if (e.matches) {
        hamburgerButton.style.display = 'block';  // Show the hamburger button
    } else {
        hamburgerButton.style.display = 'none';   // Hide the hamburger button
        navMenu.classList.remove('active');       // Hide the menu if resizing to larger view
    }
});

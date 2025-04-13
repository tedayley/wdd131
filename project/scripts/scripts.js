document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Dark Mode";
    toggleButton.style.position = "fixed";
    toggleButton.style.top = "10px";
    toggleButton.style.right = "10px";
    toggleButton.style.padding = "10px";
    toggleButton.style.cursor = "pointer";
    
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});

function openContactForm() {
    document.getElementById('contactModal').style.display = 'block';
  }

function closeContactForm() {
  document.getElementById('contactModal').style.display = 'none';
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Message sent! (This is a placeholder alert)');
  closeContactForm();
});

document.addEventListener("DOMContentLoaded", function () {
    // Set current year in copyright
    document.getElementById("year").textContent = new Date().getFullYear();

    // Set last modified date
    document.getElementById("lastModified").textContent = document.lastModified;
});

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

document.addEventListener("DOMContentLoaded", function() {
    // Get the current year
    const currentYear = new Date().getFullYear();
    document.getElementById("copyright-year").textContent = currentYear;
    
    // Get the last modified date of the document
    const lastModified = document.lastModified;
    document.getElementById("last-modified").textContent = lastModified;
});
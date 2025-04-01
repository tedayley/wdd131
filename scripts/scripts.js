document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product");

    const products = [
        { id: "p1", name: "Product A" },
        { id: "p2", name: "Product B" },
        { id: "p3", name: "Product C" },
        { id: "p4", name: "Product D" }
    ];

    // Populate product select dropdown
    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
});

// Track review count on review.html
if (window.location.pathname.includes("review.html")) {
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);

    document.addEventListener("DOMContentLoaded", () => {
        let counterDisplay = document.createElement("p");
        counterDisplay.textContent = `Total reviews submitted: ${reviewCount}`;
        document.body.appendChild(counterDisplay);
    });
}

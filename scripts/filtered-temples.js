const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "São Paulo Brazil",
        location: "São Paulo, Brazil",
        dedicated: "1978, October, 30",
        area: 59246,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/_temp/017-S%C3%A3o-Paulo-Brazil-Temple.jpg"
      },
      {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 52884,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
      },
      {
        templeName: "Johannesburg South Africa",
        location: "Johannesburg, South Africa",
        dedicated: "1985, August, 24",
        area: 19708,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22475-main.jpg"
      }
  ];
  document.addEventListener("DOMContentLoaded", function () {
    const templeContainer = document.querySelector("main");
    const buttons = document.querySelectorAll("nav button");

    function displayTemples(filteredTemples) {
        templeContainer.innerHTML = ""; // Clear previous results

        filteredTemples.forEach((temple) => {
            const figure = document.createElement("figure");

            const img = document.createElement("img");
            img.src = temple.imageUrl;
            img.alt = temple.templeName;
            img.loading = "lazy";

            const caption = document.createElement("figcaption");
            caption.innerHTML = `
                <h3>${temple.templeName}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area} sq ft</p>
            `;

            figure.appendChild(img);
            figure.appendChild(caption);
            templeContainer.appendChild(figure);
        });
    }

    function filterTemples(criteria) {
        let filtered;
        switch (criteria) {
            case "old":
                filtered = temples.filter((t) => {
                    let year = parseInt(t.dedicated.match(/\d{4}/)[0]); // Extracts the 4-digit year safely
                    return year < 1900;
                });
                break;
            case "new":
                filtered = temples.filter((t) => {
                    let year = parseInt(t.dedicated.match(/\d{4}/)[0]);
                    return year > 2000;
                });
                break;
            case "large":
                filtered = temples.filter((t) => t.area >= 90000); // Ensuring it includes 90000+
                break;
            case "small":
                filtered = temples.filter((t) => t.area <= 10000); // Includes exactly 10,000
                break;
            default:
                filtered = temples;
        }
        displayTemples(filtered);
    }    

    // Event listeners for buttons
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            filterTemples(this.id);
        });
    });

    // Display all temples by default
    displayTemples(temples);
});

document.addEventListener("DOMContentLoaded", function () {
    // Set current year in copyright
    document.getElementById("year").textContent = new Date().getFullYear();

    // Set last modified date
    document.getElementById("lastModified").textContent = document.lastModified;
});

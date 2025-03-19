// Function to calculate windchill based on the temperature (in Celsius) and wind speed (in km/h)
function calculateWindChill(temperature, windSpeed) {
    // If the temperature is <= 10°C and wind speed is > 4.8 km/h, we calculate windchill
    if (temperature <= 10 && windSpeed > 4.8) {
      return (13.12 + 0.6215 * temperature -  11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(2);
    } else {
      return "N/A"; // Windchill calculation not applicable
    }
  }
  
  // Static values for temperature and wind speed
  const temperature = 22; // Temperature in Celsius
  const windSpeed = 5; // Wind speed in km/h (for example)
  
  // Display windchill when the page loads
  window.addEventListener('DOMContentLoaded', (event) => {
    const windchillElement = document.getElementById('windchill');
    const windchillValue = calculateWindChill(temperature, windSpeed);
    windchillElement.textContent = `Windchill: ${windchillValue}`;
    
    // Set the current year and last modified date in the footer
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
  
    document.getElementById('currentYear').textContent = currentYear;
    document.getElementById('lastModified').textContent = lastModified;
  });
  
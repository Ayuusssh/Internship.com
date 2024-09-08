// Initialize and add the map
function initMap() {
    // The location of your address
    var location = { lat: 32.7767, lng: -96.7970 }; // Replace with your latitude and longitude

    // Create a map centered at the location
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15, // Adjust zoom level as needed
        center: location
    });

    // Add a marker at the location
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

// Load the Google Maps API and call initMap when the API is loaded
function loadScript() {
    var script = document.createElement('script');
    script.src = 'https://maps.app.goo.gl/RVvubrHGSL5YnbP46';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

// Execute the function to load the script
window.onload = loadScript;

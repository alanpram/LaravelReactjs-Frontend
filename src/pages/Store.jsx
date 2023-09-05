import React, { useEffect } from 'react';

function Store() {

  useEffect(() => {
    const initializeMap = () => {
      const locations = [
        {
          lat: -6.28357413443533,
          lng: 106.82674556508746,
          id: 'warung-jati',
          name: 'Grandome Warung Jati',
          hours: '10am - 7pm',
          address: 'Jl. Warung Jati Barat No.36, RW.11, Ragunan, Kec. Ps. Minggu, Jakarta, Daerah Khusus Ibukota Jakarta 12560',
          phone: '+62811-2703-650',
          mapLink: 'https://goo.gl/maps/D1tMu6B4J2MmYXgc7',
        },
        // Add more locations here
      ];

      const mapOptions = {
        zoom: 12,
        center: { lat: -6.28357413443533, lng: 106.82674556508746 },
      };

      const map = new window.google.maps.Map(document.getElementById('map_canvas'), mapOptions);

      const infowindow = new window.google.maps.InfoWindow();

      locations.forEach((location) => {
        const marker = new window.google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map,
          title: location.name,
          icon: {
            url: 'path_to_pin_image.png', // Replace with the path to your custom pin image
            scaledSize: new window.google.maps.Size(30, 40),
          },
        });

        const content = `
          <div>
            <h4>${location.name}</h4>
            <p><i class="fas fa-map-marker-alt"></i> ${location.address}</p>
            <p><i class="fas fa-clock"></i> ${location.hours}</p>
            <p><i class="fa fa-phone"></i> ${location.phone}</p>
            <a href="${location.mapLink}" target="_blank" rel="noopener noreferrer"><i class="fas fa-directions"></i> Directions</a>
          </div>
        `;

        marker.addListener('click', () => {
          infowindow.setContent(content);
          infowindow.open(map, marker);
        });
      });
    };

    // Load Google Maps API and run the initializeMap function
    const loadMapScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCaHLSPT1Q-H_SLKciQS25zKmAGGcLlg9U&callback=initialize`;
      script.async = true;
      document.head.appendChild(script);
    };

    loadMapScript();
  }, []);

  return (
    <div>
      <div id="map_canvas" style={{ height: '400px' }}></div>
    </div>
  );
}

export default Store;
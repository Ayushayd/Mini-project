import '../assets/nearby.css'

import React, { useState } from 'react';
// import './assets/nearby.css'
const Nearby = () => {
  const [showGoogleMap, setShowGoogleMap] = useState(false);
  const [showLeafletMap, setShowLeafletMap] = useState(false);

  const handleShowGoogleMap = () => {
    setShowGoogleMap(true);
    setShowLeafletMap(false);
  };

  const handleShowLeafletMap = () => {
    setShowGoogleMap(false);
    setShowLeafletMap(true);
  };

  return (
    <div>
      {/* <header>
       
      </header> */}
      <br /><br />
      <h2>Women's Welfare Locator</h2>
      <main>
         
        {/* Map Selection Section */}
        <section className="map-selection">
          <h2>Select a Map</h2>
          <p>Choose a map to locate women's welfare organizations in your area:</p>
          <button className="locate-button" onClick={handleShowGoogleMap}>
            Google Maps
          </button>
          <button className="locate-button" onClick={handleShowLeafletMap}>
            Leaflet Map
          </button>
        </section>

        {/* Google Maps */}
        {showGoogleMap && (
          <section id="google-map">
            {/* Google Maps content will be displayed here */}
          </section>
        )}

        {/* Leaflet Maps */}
        {showLeafletMap && (
          <section id="leaflet-map">
            {/* Leaflet Maps content will be displayed here */}
          </section>
        )}
      </main>

      {/* Footer Section */}
      {/* <footer> */}
        {/* Add additional elements or information as needed */}
      {/* </footer> */}
    </div>
  );
};

export default Nearby;

import React from "react";

export const Map = () => {
  return (
    <div id="map" className="container-fluid mx-0">
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.240689984366!2d-74.0178942194283!3d40.71271767943303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1a5865a093%3A0xbcc472d840c854ae!2sLe%20District!5e0!3m2!1sen!2sus!4v1665710856822!5m2!1sen!2sus"
        width="100%"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
